<?php

namespace GAS\Shop\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display the login view.
     */
    public function index()
    {
        return Inertia::render('Shop/Shop');
    }
}
