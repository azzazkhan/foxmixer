<?php

namespace Database\Seeders;

use App\Models\Mix;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Mix::truncate();
        Mix::factory(10)->create();
    }
}
