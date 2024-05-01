<?php

namespace GAS\Blog\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GAS\Blog\Models\BlogPost;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class BlogPostController extends Controller
{
    /**
     * Display the registration view.
     */
    public function index(Request $request): Response
    {
        $postList = BlogPost::latest()->paginate($request->get('limit', 1));
        return Inertia::render('Blog/Blog', ['postList' => $postList]);
    }

    public function find($slug)
    {
        $post = BlogPost::with('category', 'admin')->slug($slug)->first();

        if (!$post) {
            abort(404);
        }

        return $post;
    }
}
