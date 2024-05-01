<?php

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
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('blog_category_id')->nullable()->constrained('blog_categories');
            $table->string('title');
            $table->string('slug')->unique();
            $table->tinyText('short_description')->nullable();
            $table->longText('body');
            $table->string('meta_title')->nullable();
            $table->tinyText('meta_description')->nullable();
            $table->string('meta_keyword')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_posts');
    }
};
