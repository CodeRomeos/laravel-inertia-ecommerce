<?php

use GAS\Blog\Http\Controllers\BlogPostController;
use Illuminate\Support\Facades\Route;

Route::controller(BlogPostController::class)->group(function () {
    Route::get('', 'index')->name('index');
    Route::get('/{slug}', 'find')->name('find');
});
