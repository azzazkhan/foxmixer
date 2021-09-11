<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMixesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mixes', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique(); // Mix Code (crc32)
            $table->string('mix')->unique(); // Mix ID (md5)
            // Relative percentages or absolute amount
            $table->enum('method', ['percentage', 'amount']);
            // There should be at least one payout!
            $table->json('payout_1');
            // Two additional payouts can be added for a total of three
            $table->json('payout_2')->nullable()->default(null);
            $table->json('payout_3')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mixes');
    }
}
