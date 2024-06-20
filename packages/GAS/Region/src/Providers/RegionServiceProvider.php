<?php

namespace GAS\Region\Providers;

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
        $this->loadMigrationsFrom(__DIR__ . '/../Database/migrations');

        // $this->publishes([
        //     __DIR__ . '/../Database/Seeders/CountrySeeder.php' => database_path('Seeders/CountrySeeder.php'),
        //     __DIR__ . '/../Database/Seeders/StateSeeder.php' => database_path('Seeders/StateSeeder.php'),
        //     __DIR__ . '/../Database/Seeders/CitySeeder.php' => database_path('Seeders/CitySeeder.php'),
        //     __DIR__ . '/../Database/Seeders/cities.php' => database_path('Seeders/cities.php'),
        // ]);
    }
}
