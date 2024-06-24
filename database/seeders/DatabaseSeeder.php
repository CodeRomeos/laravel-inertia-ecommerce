<?php

namespace Database\Seeders;

use GAS\Attribute\Database\Seeders\AttributeOptionSeeder;
use GAS\Attribute\Database\Seeders\AttributeSeeder;
use GAS\Core\Database\Seeders\PermissionSeeder;
use GAS\Core\Database\Seeders\RoleSeeder;
use GAS\Core\Database\Seeders\UserSeeder;
use GAS\Region\Database\Seeders\CountrySeeder;
use GAS\Region\Database\Seeders\StateSeeder;
use GAS\Region\Database\Seeders\CitySeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([RoleSeeder::class, PermissionSeeder::class, UserSeeder::class, AttributeSeeder::class, AttributeOptionSeeder::class, CountrySeeder::class, StateSeeder::class, CitySeeder::class]);
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
