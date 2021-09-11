<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MixController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/mix/{mix:mix}/LetterOfGuarantee.txt', [MixController::class, 'letterOfGuarantee']);

Route::get('/test', function () {
    $mix = App\Models\Mix::firstOrFail();
    return new App\Mail\MixGeneration($mix);
});

Route::any('/{any?}', function () {
    return view('index');
})->where('any', '.*');
