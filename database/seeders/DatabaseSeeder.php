<?php

namespace Database\Seeders;

use GAS\Attribute\Database\Seeders\AttributeOptionSeeder;
use GAS\Attribute\Database\Seeders\AttributeSeeder;
use GAS\Core\Database\Seeders\PermissionSeeder;
use GAS\Core\Database\Seeders\RoleSeeder;
use GAS\Core\Database\Seeders\UserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);
        $this->call(PermissionSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(AttributeSeeder::class);
        $this->call(AttributeOptionSeeder::class);
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
