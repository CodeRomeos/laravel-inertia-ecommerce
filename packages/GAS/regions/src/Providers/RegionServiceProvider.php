<?php

namespace GAS\Regions\Providers;

use Illuminate\Support\ServiceProvider;

class RegionServiceProvider extends ServiceProvider
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
        $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

        $this->publishes([
            __DIR__ . '/../database/seeders/CountrySeeder.php' => database_path('seeders/CountrySeeder.php'),
            __DIR__ . '/../database/seeders/StateSeeder.php' => database_path('seeders/StateSeeder.php'),
            __DIR__ . '/../database/seeders/CitySeeder.php' => database_path('seeders/CitySeeder.php'),
            __DIR__ . '/../database/seeders/cities.php' => database_path('seeders/cities.php'),
        ]);
    }
}
