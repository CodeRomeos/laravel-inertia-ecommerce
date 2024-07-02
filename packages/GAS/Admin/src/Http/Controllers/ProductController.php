<?php

namespace GAS\Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use GAS\Core\Helpers\GlobalHelper;
use GAS\Product\Enums\ProductStatusEnum;
use GAS\Product\Enums\ProductTypeEnum;
use GAS\Product\Models\Product;
use GAS\Product\Models\ProductPrice;
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
            'user_id' => 'nullable|integer|exists:users,id',
            'attribute_family_id' => 'nullable|integer|exists:attribute_families,id',
            'type' => ['required', 'string', Rule::enum(ProductTypeEnum::class)],
            'sku' => 'required|alpha_num|unique:products,sku',
            'name' => 'required|string',
            'description' => 'nullable|string',
            'short_description' => 'nullable|string',
            'purchase_note' => 'nullable|string',
            'enable_reviews' => 'nullable|boolean',
            'status' => ['required', 'integer', Rule::enum(ProductStatusEnum::class)],
            'comment' => 'nullable|string',
        ]);

        $product = GlobalHelper::dbTryCatch(function () use ($request) {
            $request->merge(['user_id' => auth()->id()]);
            $product = Product::create($request->all());
        });

        return redirect()->route('admin.products.edit', $product->id)->with(['flash_type' => 'success', 'flash_message' => 'Product created successfully', 'flash_description' => $product->name]);
    }

    public function editProductPrice(Request $request, $productId)
    {
        $request->validate([
            'user_id' => 'nullable|integer|exists:users,id',
            'price' => 'required|numeric',
            'sale_price' => 'nullable|numeric',
            'sale_price_starts_at' => 'nullable|date_format:Y-m-d H:i:s',
            'sale_price_ends_at' => 'nullable|date_format:Y-m-d H:i:s',
        ]);

        $productPrice = GlobalHelper::dbTryCatch(function () use ($request, $productId) {
            $product = Product::findOrFail($productId);
            $request->merge(['user_id' => auth()->id(), 'product_id' => $product->id]);
            $productPrice = ProductPrice::create($request->all());
        });

        return redirect()->back()->with(['flash_type' => 'success', 'flash_message' => 'Product price added successfully', 'flash_description' => $productPrice->price]);
    }
}
