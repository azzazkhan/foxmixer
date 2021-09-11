<?php

namespace App\Helpers;

use Carbon\Carbon;
use App\Models\Mix;
use App\Config;

class LetterOfGuarantee
{
    public static function generate(Mix $mix): string
    {
        $created = new Carbon($mix->created_at);
        $expiry = $created->addDays(7);
        $method = $mix->method;
        $format = 'D, d M Y H:i:s';
        $address = Config::BTC_ADDRESS;
        $site_url = Config::SITE_URL;
        $domain_no_www = Config::DOMAIN_NO_WWW;
        $site_name = config('app.name', 'FoxMixer');

        $contents = [
            '-----BEGIN PGP SIGNED MESSAGE-----',
            "Hash: SHA256",
            '',
            "With this Letter of Guarantee, $site_name confirms that the bitcoin address",
            '',
            "    $address",
            '',
            sprintf(
                "has been created successfully and is now accepting payments (including 6 confirmations) until %s GMT.",
                $expiry->format($format),
            ),
            'The minimum payin amount for your specific payout distribution is 0.03100000 BTC.',
            "A total transaction fee of only 1 % and a fee of 0.00070000 BTC per payout address is subtracted.",
            '',
            'After the specified delay times, all payments to this address will be payed out,',
            sprintf("according to the following %s distribution:", $method),
            '',
            str_repeat('=', 70),
        ];

        static::addPayouts($contents, static::formatPayouts($mix), $method);

        $contents = array_merge($contents, [
            '',
            "To check the current status of this mix, visit $site_url/mix/" . $mix->mix,
            sprintf("For future mixes, use the mixcode \"%s\" to prevent the reception of any of your previous coins.", $mix->code),
            '',
            "Thanks for using $site_name. If you have any trouble, don't hesitate to contact us via contact(at)$domain_no_www.",
            '',
            '',
            "Mixcode: " . $mix->code,
            "Mix id: " . $mix->mix,
        ]);

        static::addPGPSignature($contents);

        return implode("\n", $contents);
    }

    private static function addPayouts(array &$contents, array $payouts, string $method): void
    {
        for ($i = 0; $i < count($payouts); $i++) {
            $payout = new Carbon($payouts[$i]['timestamp']);
            $contents[] = sprintf('Payout number %d', $i + 1);
            $contents[] = sprintf('    Payout bitcoin address: %s', $payouts[$i]['address']);
            if ($method === 'amount')
                $contents[] = sprintf('    Payout amount: %s BTC', $payouts[$i]['amount']);
            else
                $contents[] = sprintf('    Payout percentage: %s', $payouts[$i]['percentage']) . ' %';
            $contents[] = sprintf('    Payout date: %s GMT', $payout->format('D, d M Y H:i:s'));
            $contents[] = str_repeat('=', 70);
        }
    }

    public static function formatPayouts(Mix $mix): array
    {
        $payouts = [$mix->payout_1];
        if (is_array($mix->payout_2)) $payouts[] = $mix->payout_2;
        if (is_array($mix->payout_3)) $payouts[] = $mix->payout_3;

        return $payouts;
    }

    private static function addPGPSignature(array &$contents): void
    {
        $contents = array_merge($contents, [
            '-----BEGIN PGP SIGNATURE-----',
            '',
            'wsFcBAEBCAAQBQJhNHDkCRD5jNva3RIekQAARXQP/R9RaRQ7B2z8ZDa0gtWF',
            'RfWAfIgSiGLjBUUrzgj4ldPqx0yl572Wz/scgQLTyA1vYuqkSER2Ej65B6HI',
            'UW8gHc2xAuJ+Bb/79stxB75ZWg/I8Jhz/QQUVp37ygVGCU6K3lQGzMSkUGih',
            'SUbOt1BJLOyy5Xy5IygBpV7HiNYUQ2ORiXxG/TY07ucRUOhc5veOBWAqGbOl',
            'JyIAA+DmCTwSBaEJBr0w88m/nhPyzP8daCyxcqV1GykU8X8jGSAaOI3O+9zX',
            'wFNkvUNX4hWXwWFYIocdxyHN4oXEme+oKYl/CG0tYIz/+4kc4kHYN3BeATlD',
            'GcMJkKTyS5O9n4p+PfcF6d2ocana/mIfozOxSy7Da/0YyuVVtY1toiHM7vGM',
            'H+OywRBOyKNBjztxdQ1SZbxC0bSa9l4w37UMmo1phBZNT5Sjh6RP3orLUwtO',
            'c/H0tC6jzzOL5ZHlrmPoWi0mrBU99wu67Kr8WjM0t6giDQRjDtvoSz7tDLh/',
            'vKwboe3vi0i6G5ImQ2LKfdvOK8tOLzDTEbvHpdu5e1DIwzSHblxIHk1Psium',
            '4q5JXXjZu/OHh9oMWzzlKkN8h0KHkcDrruBd+oEY7pTWouwM5c/zMMzu+FI3',
            '5/01IenWAyTJ3Q0h1L069QNhiWtZwWgLkdsQjIZOcsFqWY3Klry9UtZ4SwCX',
            'oTvj',
            '=K5Xb',
            '-----END PGP SIGNATURE-----',
        ]);
    }
}
