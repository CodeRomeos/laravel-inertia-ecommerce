<?php

namespace GAS\Blog\Models;

use App\Models\User;
use GAS\Blog\Models\BlogCategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id', 'id');
    }

    public function scopeSlug($q, $slug)
    {
        $q->where('slug', $slug);
    }
}
