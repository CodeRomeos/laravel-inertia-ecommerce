<?php

namespace GAS\Core\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ActivityLogResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class ActivityController extends Controller
{
    public function index(Request $request)
    {
        $activityLogs = Activity::with(['subject', 'causer'])->latest()->paginate($request->get('limit', config('app.pagination_limit')))->withQueryString();
        return Inertia::render('ActivityLogs/ActivityLogs', ['activityLogs' => ActivityLogResource::collection($activityLogs)]);
    }
}
