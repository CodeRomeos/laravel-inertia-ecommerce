<?php

namespace GAS\Attribute\Database\Seeders;

use GAS\Attribute\Models\AttributeOption;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


class AttributeOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        activity()->disableLogging();
        Schema::disableForeignKeyConstraints();
        DB::table('attribute_options')->truncate();
        DB::table('attribute_option_translations')->truncate();

        AttributeOption::create(['user_id' => 1, 'attribute_id' => 1, 'admin_name' => 'Red', 'title' => 'Red']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 1, 'admin_name' => 'Blue', 'title' => 'Blue']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 1, 'admin_name' => 'Green', 'title' => 'Green']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 1, 'admin_name' => 'Pink', 'title' => 'Pink']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 1, 'admin_name' => 'White', 'title' => 'White']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 1, 'admin_name' => 'Black', 'title' => 'Black']);

        AttributeOption::create(['user_id' => 1, 'attribute_id' => 2, 'admin_name' => 'XS', 'title' => 'XS']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 2, 'admin_name' => 'S', 'title' => 'S']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 2, 'admin_name' => 'M', 'title' => 'M']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 2, 'admin_name' => 'L', 'title' => 'L']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 2, 'admin_name' => 'XL', 'title' => 'XL']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 2, 'admin_name' => 'XXL', 'title' => 'XXL']);
        AttributeOption::create(['user_id' => 1, 'attribute_id' => 2, 'admin_name' => 'XXXL', 'title' => 'XXXL']);

        Schema::disableForeignKeyConstraints();
        activity()->enableLogging();
    }
}
