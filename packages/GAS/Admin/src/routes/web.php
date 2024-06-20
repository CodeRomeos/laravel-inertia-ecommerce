<?php

use GAS\Admin\Http\Controllers\Auth\AuthenticatedSessionController;
use GAS\Admin\Http\Controllers\Blog\BlogCategoryController;
use GAS\Admin\Http\Controllers\Blog\BlogPostController;
use GAS\Admin\Http\Controllers\RoleController;
use GAS\Admin\Http\Controllers\UserController;
use GAS\Admin\Http\Controllers\ActivityController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

Route::prefix('users')->name('users.')->controller(UserController::class)->group(function () {
    Route::post('update/{id}', 'update')->name('update')->middleware(['can:edit users']);
    Route::post('store', 'store')->name('store')->middleware(['can:create users']);
    Route::get('create', 'create')->name('create')->middleware(['can:create users']);
    Route::get('{id}', 'edit')->name('edit')->middleware(['can:edit users']);
    Route::get('', 'index')->name('index')->middleware(['can:view users']);
});

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

Route::prefix('roles')->name('roles.')->middleware('auth')->controller(RoleController::class)->group(function () {
    Route::post('update/{id}', 'update')->name('update')->middleware(['can:edit roles']);
    Route::post('store', 'store')->name('store')->middleware(['can:create roles']);
    Route::get('create', 'create')->name('create')->middleware(['can:create roles']);
    Route::get('{id}', 'edit')->name('edit')->middleware(['can:edit roles']);
    Route::get('', 'index')->name('index')->middleware(['can:view roles']);
});

Route::prefix('activity-logs')->name('activityLogs.')->middleware('auth')->controller(ActivityController::class)->group(function () {
    Route::get('', 'index')->name('index')->middleware(['can:view activity logs']);
});

Route::get('/customers', function () {
    return Inertia::render('Admin/Customers/Customers');
})->name('customers.index');

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->name('dashboard');
