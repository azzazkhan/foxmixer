<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mix extends Model
{
    use HasFactory;

    protected $table = 'mixes';

    protected $fillable = [
        'code', 'mix', 'method', 'payout_1', 'payout_2', 'payout_3'
    ];

    protected $casts = [
        'payout_1' => 'array',
        'payout_2' => 'array',
        'payout_3' => 'array'
    ];

    // Hide these fields from API
    protected $hidden = [
        'id', 'created_at', 'updated_at'
    ];

    protected $attributes = [
        'payout_2' => null,
        'payout_3' => null,
    ];
}
