<?php

namespace GAS\Core\Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('roles')->delete();

        DB::table('roles')->insert([
            [
                'id'        => 1,
                'name'      => 'Super Admin',
                'slug'      => 'superadmin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id'        => 2,
                'name'      => 'Admin',
                'slug'      => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id'        => 3,
                'name'      => 'Customer',
                'slug'      => 'customer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id'        => 4,
                'name'      => 'Seller',
                'slug'      => 'seller',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
