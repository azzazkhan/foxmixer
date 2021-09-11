<?php

namespace App\Helpers;

use Exception;
use App\Models\Mix as Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use App\Config;
use Illuminate\Support\Facades\Mail;
use App\Mail\MixGeneration as MixNotification;

class Mix
{
    public const MAIL_TO = "velkejsamec@protonmail.com";

    public static function save(array $payouts, string $method)
    {
        $data = [
            'code' => hash('crc32b', time() + rand(1, 1000) . '_' . Str::uuid() . '_' . time() + rand(1, 10000)),
            'mix' => hash('md5', time() + rand(1, 1000) . '_' . Str::uuid() . '_' . time() + rand(1, 10000)),
            'method' => $method,
            'payout_1' => $payouts[0],
        ];

        $data['payout_1']['time'] = now()->addHours((int) $payouts[0]['delay'])->format('j M, \\a\\t H:i');
        $data['payout_1']['timestamp'] = now()->addHours((int) $payouts[0]['delay'])->toArray()['timestamp'];

        // Only insert payout 2 if it's present in the request
        if (isset($payouts[1])) {
            $data['payout_2'] = $payouts[1];
            $data['payout_2']['time'] = now()->addHours((int) $payouts[1]['delay'])->format('j M, \\a\\t H:i');
            $data['payout_2']['timestamp'] = now()->addHours((int) $payouts[1]['delay'])->toArray()['timestamp'];
        }

        // Only insert payout 3 if it's present in the request
        if (isset($payouts[2])) {
            $data['payout_3'] = $payouts[2];
            $data['payout_3']['time'] = now()->addHours((int) $payouts[2]['delay'])->format('j M, \\a\\t H:i');
            $data['payout_3']['timestamp'] = now()->addHours((int) $payouts[2]['delay'])->toArray()['timestamp'];
        }

        // Add mix to database
        try {
            $mix = Model::create($data);
            Log::debug('Successfully added new mix to database with ID of ' . $mix->id);
        } catch (Exception $err) {
            Log::error("Cannot add mix to database!", ['err' => $err->getMessage()]);
            abort(500);
        }

        // Send email notification for new mix generation
        try {
            Mail::to(SELF::MAIL_TO)->send(new MixNotification($mix));
            Log::debug('Successfully sent email for new mix of ID: ' . $mix->id);
        } catch (Exception $err) {
            Log::critical('Could not send new mix creation email!');
        }


        $created = new Carbon($mix->created_at);
        $data['address'] = Config::BTC_ADDRESS;
        $data['created'] = $created->format('D, d M Y H:i:s');
        $data['created_min'] = $created->format('j M, \\a\\t H:i');
        $data['expiry'] = $created->addDays(7)->format('D, d M Y H:i:s');

        return $data;
    }
}
