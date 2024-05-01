<?php

namespace GAS\Admin\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AdminServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->registerConfig();
    }

    /**
     * Register package config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        // Inertia::loadComponentsFrom(__DIR__ . '/../resources/js', 'admin');
        // $this->mergeConfigFrom(
        //     dirname(__DIR__) . '/Config/menu.php',
        //     'menu.admin'
        // );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Route::middleware(['web'])->name('admin.')->prefix('admin')->group(__DIR__ . '/../routes/auth.php');
        Route::middleware(['web', 'auth', 'verified', 'role:superadmin,admin'])->name('admin.')->prefix('admin')->group(__DIR__ . '/../routes/web.php');
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
    }
}
