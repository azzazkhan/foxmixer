<?php

namespace App\Mail;

use App\Config;
use App\Helpers\LetterOfGuarantee;
use App\Models\Mix;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;

class MixGeneration extends Mailable
{
    use Queueable, SerializesModels;

    private $mix;

    public function __construct(Mix $mix)
    {
        $this->mix = $mix;
    }


    public function build()
    {
        return $this->view('emails.summary', with(static::formateMix($this->mix)));
    }

    private static function formateMix(Mix $mix)
    {
        $payouts = [];
        foreach (LetterOfGuarantee::formatPayouts($mix) as $index => $payout) {
            $carbon = new Carbon($payout['timestamp']);
            $data = [
                'number' => $index + 1,
                'address' => $payout['address'],
                'delay' => $payout['delay'],
                'date' => $carbon->format('D, d M Y H:i:s')
            ];

            if (isset($payout['amount'])) $data['amount'] = $payout['amount'];
            else $data['percentage'] = $payout['percentage'];

            $payouts[] = $data;
        }

        $created = new Carbon($mix->created_at);
        $expiry = new Carbon($mix->created_at);

        return [
            'code' => $mix->code,
            'created' => $created->format('D, d M Y H:i:s'),
            'expiry' => $expiry->addDays(7)->format('D, d M Y H:i:s'),
            'id' => $mix->mix,
            'method' => $mix->method,
            'payouts' => $payouts,
            'site_url' => Config::SITE_URL,
            'app_name' => config('app.name', 'FoxMixer'),
        ];
    }
}
