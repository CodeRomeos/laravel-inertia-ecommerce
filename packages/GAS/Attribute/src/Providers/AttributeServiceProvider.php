<?php

namespace GAS\Attribute\Providers;

use Illuminate\Support\ServiceProvider;

class AttributeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
        // $this->publishes([
        //     __DIR__ . '/../database/seeders/CountrySeeder.php' => database_path('seeders/CountrySeeder.php'),
        // ]);
    }
}
