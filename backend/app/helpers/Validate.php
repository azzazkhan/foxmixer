<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class Validate
{
    private static $regex = [
        'address' => '/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/',
        'amount' => '/^\d\d*(\.\d+)?$/'
    ];

    private static function payout(array $payout, string $method): bool
    {
        // Should be an associative array (JSON objects in PHP)
        if (!is_array($payout)) {
            Log::warning("Payout is not an array");
            return false;
        }

        // Address must be a string and must be a valid BTC address!
        if (!(isset($payout['address']) && is_string($payout['address']) && preg_match(static::$regex['address'], $payout['address']))) {
            Log::warning("Payout has an invalid address!");
            return false;
        }

        // Payout delay must be an integer and between 2 to 48
        if (!(isset($payout['delay']) && is_integer($payout['delay']) && (int) $payout['delay'] >= 2 && (int) $payout['delay'] <= 48)) {
            Log::warning("Payout has does not has a delay or has an invalid delay!");
            return false;
        }

        // If payment method is set to "amount" then amount must be present and it should be a numeric value either integer or decimal and greater than (0.00001000)
        if ($method === 'amount' && !(isset($payout['amount']) && preg_match(static::$regex['amount'], $payout['amount']) && is_numeric($payout['amount']) && (float) $payout['amount'] >= 0.00001000)) {
            Log::warning("Payout has an invalid amount or the amount is too low!");
            return false;
        }

        // If payment method is set to "percentage" then percentage must be present and it should be an integer and must be between 1 and 100
        if (
            $method === "percentage" &&
            !(isset($payout['percentage']) &&
                is_integer($payout['percentage']) &&
                (int) $payout['percentage'] > 0 &&
                $payout['percentage'] <= 100)
        ) {
            Log::warning("Payout does not have a percentage or percentage is invalid!");
            return false;
        }

        return true;
    }

    public static function mix(Request $request): array
    {
        // The request must include `method` and `payouts` fields!
        if (!$request->has(['method', 'payouts'])) {
            Log::warning("Request does not have sufficient fields!");
            abort(400);
        }

        // Request must be either equal to `amount` or `percentage`
        $method = $request->input('method');
        if (!is_string($method) || !preg_match('/^(amount|percentage)$/', $method)) {
            Log::warning("Request contains unknown payment method!", compact('method'));
            abort(400, 'Unknown payment method');
        }

        // Payouts must be an array of payout detail and their number
        // must be between 1 to 3
        $payouts = $request->input('payouts');
        if (!is_array($payouts) || count($payouts) < 1 || count($payouts) > 3) {
            Log::warning("Request has invalid payout or has too many or too few payouts");
            abort(400, 'Invalid payouts data');
        }

        // Total percentage or amount
        $total = 0;
        foreach ($payouts as $payout) {
            // Validate each payout
            if (!static::payout($payout, $method)) {
                Log::warning("Single payout validation failed!");
                abort(400);
            }
            // Calculate sum of percentage/amount of all payouts
            $total += $method === "percentage" ? (int) $payout['percentage'] : (float) $payout['amount'];
        }

        // If payout method is percentage then total percentage must be equal to 100% and
        // if payout method is amount then total amount must be greater than 0.00200000 BTC
        if (($method === "percentage" && $total !== 100) || $method === "amount" && $total < 0.00200000) {
            Log::warning("Request has either invalid percentage or the amount is too low", compact('total'));
            abort('400', "Payout $method is too low");
        }

        Log::debug("Request passed the validations!");
        return compact('method', 'payouts', 'total');
    }
}
