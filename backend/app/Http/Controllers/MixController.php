<?php

namespace App\Http\Controllers;

use App\Config;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Mix;
use App\Helpers\Validate;
use App\Helpers\Mix as MixHelper;
use App\Helpers\LetterOfGuarantee as LetterHelper;

class MixController extends Controller
{
    public function letterOfGuarantee(Mix $mix)
    {
        $contents = LetterHelper::generate($mix);

        $headers = [
            'Content-Type' =>        'text/plain',
            'Content-Disposition' => 'attachment; filename="LetterOfGuarantee.txt"'
        ];
        return response()->streamDownload(function () use ($contents) {
            echo $contents;
        }, 'LetterOfGuarantee.txt', $headers);
    }

    public function store(Request $request)
    {
        Log::debug("New payout entry request received.");
        $validated = Validate::mix($request);
        $data = MixHelper::save($validated['payouts'], $validated['method']);

        return $data;
    }

    public function show(Mix $mix)
    {
        $created = new Carbon($mix->created_at);
        $expiry = $created->addDays(7);

        if ($expiry->toArray()['timestamp'] <= time())
            abort(404, 'The specified mix is expired!');


        // Remove empty payout fields
        if (!is_array($mix['payout_2'])) unset($mix['payout_2']);
        if (!is_array($mix['payout_3'])) unset($mix['payout_3']);
        $mix['address'] = Config::BTC_ADDRESS;
        $mix['created'] = $created->format('D, d M Y H:i:s');
        $mix['created_min'] = $created->format('j M, \\a\\t H:i');
        $mix['expiry'] = $expiry->format('D, d M Y H:i:s');


        return $mix;
    }
}
