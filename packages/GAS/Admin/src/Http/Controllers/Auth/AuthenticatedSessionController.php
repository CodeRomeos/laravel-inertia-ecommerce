<?php

namespace GAS\Admin\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use GAS\Admin\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create()
    {
        if (auth()->user()) {
            return redirect()->route('admin.dashboard');
        }
        return Inertia::render('Admin/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        if (auth()->user()) {
            return redirect()->route('admin.dashboard');
        }
        $request->authenticate();

        $request->session()->regenerate();

        $user = $request->user();
        activity()
            ->causedBy($user)
            ->performedOn($user)
            ->event('login')
            ->log('User logged in. User: ' . $user->name . " (#$user->id)");

        return redirect()->intended(route('admin.dashboard'));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = $request->user();
        activity()
            ->causedBy($user)
            ->performedOn($user)
            ->event('logout')
            ->log('User logged out. User: ' . $user->name . " (#$user->id)");

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(route('admin.login'));
    }
}
