<?php

namespace GAS\Attribute\Database\Seeders;

use GAS\Attribute\Models\Attribute;
use GAS\Core\Enums\InputTypeEnum;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


class AttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        activity()->disableLogging();
        Schema::disableForeignKeyConstraints();
        DB::table('attributes')->truncate();

        Attribute::create([
            'user_id' => 1, 'code' => 'color', 'admin_name' => 'Color', 'name' => 'Color',
            'type' => InputTypeEnum::select, 'swatch_type' => 'color', 'position' => 0, 
            'is_filterable' => 1, 'is_comparable' => 1, 'is_visible_on_front' => 1
        ]);
        
        Attribute::create([
            'user_id' => 1, 'code' => 'size', 'admin_name' => 'Size', 'name' => 'Color',
            'type' => InputTypeEnum::select, 'position' => 0, 
            'is_filterable' => 1, 'is_comparable' => 1, 'is_visible_on_front' => 1
        ]);
        
        Schema::disableForeignKeyConstraints();
        activity()->enableLogging();
    }
}
