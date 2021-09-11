<?php

namespace Database\Factories;

use App\Models\Mix;
use Illuminate\Database\Eloquent\Factories\Factory;


class MixFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Mix::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $payout_type = rand(0, 1) === 0 ? 'percentage' : 'amount';

        return [
            'payout_type' => $payout_type,
            'payout_1' => static::getRandomPayout($payout_type),
            'payout_2' => static::getRandomPayout($payout_type),
            'payout_3' => static::getRandomPayout($payout_type),
        ];
    }

    private static function getRandomPayout(string $type): array
    {
        $payout = [
            'address' => '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
            'delay'   => rand(2, 48)
        ];

        if ($type === 'amount')
            $payout['amount'] = (float) number_format((float) rand() / (float) getrandmax() * rand(5, 50), 8, '.', '');
        else $payout['percentage'] = rand(0, 100);

        return $payout;
    }
}
