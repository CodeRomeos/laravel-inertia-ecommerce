<?php

use GAS\Product\Enums\ProductTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('attribute_family_id')->nullable()->constrained('attribute_families');
            $table->string('type')->default(ProductTypeEnum::simple)->index();
            $table->string('sku')->unique()->index();
            $table->string('name')->index();
            $table->text('description')->nullable();
            $table->tinyText('short_description')->nullable();
            $table->tinyText('purchase_note')->nullable();
            $table->boolean('enable_reviews')->default(1)->nullable();
            $table->unsignedTinyInteger('status')->comment('1 => Active, 0 => Inactive, 2 => Draft, 3 => Pending, 4 => Rejected')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
