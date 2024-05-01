<?php

namespace GAS\Core\Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class LocalesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('locales')->delete();

        DB::table('locales')->insert([
            [
                'id'        => 1,
                'code'      => 'en',
                'name'      => 'English',
                'logo_path' => 'locales/en.png',
            ]
        ]);
    }
}
