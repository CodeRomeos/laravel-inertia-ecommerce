<?php

namespace GAS\Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use GAS\Product\Enums\ProductTypeEnum;
use GAS\Product\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display the login view.
     */
    public function index()
    {
        return Inertia::render('Admin/Products/Products');
    }

    public function create()
    {
        return Inertia::render('Admin/Products/Product');
    }

    public function save(Request $request)
    {
        $request->validate([
            'user_id' => 'sometimes|required|integer|exists:users,id',
            'attribute_family_id' => 'required|integer|exists:attribute_families,id',
            'type' => ['required', 'string', Rule::enum(ProductTypeEnum::class)],
            'sku' => 'required|alpha_num|unique:products,sku',
            'name' => 'required|string',
            'comment' => 'nullable|string',
        ]);

        DB::beginTransaction();
        try {
            $product = Product::create($request->all());
            DB::commit();
        } catch (\Throwable $th) {
            Log::error($th);
            DB::rollBack();
        }

        return redirect()->route('admin.products.edit', $product->id)->with(['flash_type' => 'success', 'flash_message' => 'Product created successfully', 'flash_description' => $product->name]);
    }
}
