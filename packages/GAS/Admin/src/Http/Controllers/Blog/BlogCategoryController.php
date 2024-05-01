<?php

namespace GAS\Admin\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use GAS\Blog\Http\Resources\BlogCategory as ResourcesBlogCategory;
use GAS\Blog\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class BlogCategoryController extends Controller
{
    public function index(Request $request)
    {
        $allCategories = BlogCategory::latest()->paginate($request->get('limit', 10));
        return Inertia::render('Admin/Blog/Categories', ['allCategories' => $allCategories]);
    }

    public function create()
    {
        return Inertia::render('Admin/Blog/Category');
    }

    public function edit($id)
    {
        $blogCategory = BlogCategory::findOrFail($id);
        $blogCategoryResource = new ResourcesBlogCategory($blogCategory);
        $blogCategoryResource->wrap(null);
        return Inertia::render('Admin/Blog/Category', ['blogCategory' => $blogCategoryResource]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'slug' => 'required|string|unique:blog_categories,slug',
            'body' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keyword' => 'nullable|string',
            'inactive_at' => 'nullable|date_format:Y-m-d H:i:s',
        ]);

        $blogCategory = BlogCategory::create($request->all());

        return redirect()->route('admin.blog.categories.edit', $blogCategory->id)->with(['flash_type' => 'success', 'flash_message' => 'Category created successfully', 'flash_description' => $blogCategory->title]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'sometimes|string',
            'slug' => 'sometimes|string|unique:blog_categories,slug,' . $id,
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keyword' => 'nullable|string',
            'inactive_at' => 'nullable|date_format:Y-m-d H:i:s',
        ]);
        $blogCategory = BlogCategory::findOrFail($id);
        $blogCategory->fill($request->all());
        $blogCategory->save();
        return redirect()->route('admin.blog.categories.edit', $id)->with(['flash_type' => 'success', 'flash_message' => 'Category updated successfully', 'flash_description' => $blogCategory->title]);
    }
}
