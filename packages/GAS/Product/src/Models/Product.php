<?php

namespace GAS\Product\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function price(): HasOne
    {
        return $this->hasOne(ProductPrice::class)->latest();
    }

    public function prices(): HasMany
    {
        return $this->hasMany(ProductPrice::class);
    }
}
