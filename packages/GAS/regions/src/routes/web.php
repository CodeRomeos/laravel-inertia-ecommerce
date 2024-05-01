<?php

use Illuminate\Support\Facades\Route;

Route::prefix('regions')->group(function () {
    Route::get('city', function () {
        dd('city');
    });
});
