<?php

namespace GAS\Attribute\Database\Seeders;

use GAS\Attribute\Models\AttributeFamily;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Role;


class AttributeFamilySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        activity()->disableLogging();
        Schema::disableForeignKeyConstraints();
        DB::table('attribute_families')->truncate();

        AttributeFamily::create(['user_id' => 1, 'name' => 'default', 'code' => 'default', 'status' => 1]);
        
        Schema::disableForeignKeyConstraints();
        activity()->enableLogging();
    }
}
