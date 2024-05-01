<?php

use GAS\Admin\Http\Controllers\Auth\AuthenticatedSessionController;
use GAS\Admin\Http\Controllers\Blog\BlogCategoryController;
use GAS\Admin\Http\Controllers\Blog\BlogPostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

Route::prefix('catalog')->name('catalog.')->group(function () {
    Route::get('/products', function () {
        return Inertia::render('Admin/Products/Products');
    })->name('products');

    Route::get('/categories', function () {
        return Inertia::render('Admin/Categories/Categories');
    })->name('categories');
});

Route::prefix('blog')->name('blog.')->group(function () {
    

    Route::controller(BlogPostController::class)->prefix('posts')->name('posts.')->group(function () {
        Route::post('update/{id}', 'update')->name('update');
        Route::post('store', 'store')->name('store');
        Route::get('create', 'create')->name('create');
        Route::get('{id}', 'edit')->name('edit');
        Route::get('', 'index')->name('index');
    });
    Route::controller(BlogCategoryController::class)->prefix('categories')->name('categories.')->group(function () {
        Route::post('update/{id}', 'update')->name('update');
        Route::post('store', 'store')->name('store');
        Route::get('create', 'create')->name('create');
        Route::get('{id}', 'edit')->name('edit');
        Route::get('', 'index')->name('index');
    });
});


Route::get('/customers', function () {
    return Inertia::render('Admin/Customers/Customers');
})->name('customers.customers');


Route::get('/', function () {
    return Inertia::render('Admin/Dashboard');
})->name('dashboard');
