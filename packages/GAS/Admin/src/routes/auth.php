<?php

use GAS\Admin\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;


Route::get('login', [AuthenticatedSessionController::class, 'create']);
Route::post('login', [AuthenticatedSessionController::class, 'store'])
    ->name('login');