<?php

namespace GAS\Admin\Http\Controllers\AttributeFamilies;

use App\Http\Controllers\Controller;
use GAS\Attribute\Http\Resources\AttributeFamilyResource;
use GAS\Attribute\Models\AttributeFamily;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttributeFamilyController extends Controller
{
    public function index(Request $request)
    {
        $attributeFamilies = AttributeFamily::latest()->paginate($request->get('limit', config('app.pagination_limit')))->withQueryString();
        return Inertia::render('Admin/AttributeFamilies/AttributeFamilies', ['attributeFamilies' => AttributeFamilyResource::collection($attributeFamilies)]);
    }

    public function create(Request $request)
    {
        return Inertia::render('Admin/AttributeFamilies/AttributeFamily');
    }
}
