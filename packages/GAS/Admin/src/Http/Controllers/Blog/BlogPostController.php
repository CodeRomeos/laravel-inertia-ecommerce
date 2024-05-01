<?php

namespace GAS\Admin\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use GAS\Blog\Http\Resources\BlogCategory as ResourcesBlogCategory;
use GAS\Blog\Http\Resources\BlogPost as ResourcesBlogPost;
use GAS\Blog\Models\BlogCategory;
use GAS\Blog\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class BlogPostController extends Controller
{
    public function index(Request $request)
    {
        $blogPosts = BlogPost::with(['category', 'user'])->latest()->paginate($request->get('limit', 10));
        return Inertia::render('Admin/Blog/Posts', ['blogPosts' => $blogPosts]);
    }

    public function create()
    {
        $blogCategories = BlogCategory::orderBy('title', 'ASC')->get();
        return Inertia::render('Admin/Blog/Post', ['blogCategories' => $blogCategories]);
    }

    public function edit($id)
    {
        $blogPost = BlogPost::findOrFail($id);
        $blogPostResource = new ResourcesBlogPost($blogPost);
        $blogPostResource->wrap(null);
        $blogCategories = BlogCategory::orderBy('title', 'ASC')->get();
        return Inertia::render('Admin/Blog/Post', ['blogPost' => $blogPostResource, 'blogCategories' => ResourcesBlogCategory::collection($blogCategories)]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'slug' => 'required|string|unique:blog_posts,slug',
            'body' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keyword' => 'nullable|string',
            'inactive_at' => 'nullable|date_format:Y-m-d H:i:s',
        ]);
        $data = $request->all();
        $data['user_id'] = auth()->id();
        $blogPost = BlogPost::create($data);

        return redirect()->route('admin.blog.posts.edit', $blogPost->id)->with(['flash_type' => 'success', 'flash_message' => 'Post created successfully', 'flash_description' => $blogPost->title]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'sometimes|string',
            'slug' => 'sometimes|string|unique:blog_posts,slug,' . $id,
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keyword' => 'nullable|string',
            'inactive_at' => 'nullable|date_format:Y-m-d H:i:s',
        ]);
        $blogPost = BlogPost::findOrFail($id);
        $blogPost->fill($request->all());
        $blogPost->save();
        return redirect()->route('admin.blog.posts.edit', $id)->with(['flash_type' => 'success', 'flash_message' => 'Post updated successfully', 'flash_description' => $blogPost->title]);
    }
}
