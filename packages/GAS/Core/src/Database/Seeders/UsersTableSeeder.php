<?php

namespace GAS\Core\Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->delete();

        DB::table('users')->insert([
            [
                'id'        => 1,
                'first_name'      => 'Super',
                'last_name'      => 'Admin',
                'email' => 'admin@example.com',
                'username' => 'superadmin',
                'is_verified' => now(),
                'role_id' => 1,
                'password' => bcrypt('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id'        => 2,
                'first_name'      => 'John',
                'last_name'      => 'Doe',
                'email' => 'johndoe@example.com',
                'username' => 'johndoe',
                'is_verified' => now(),
                'role_id' => 3,
                'password' => bcrypt('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
