<?php

namespace GAS\Attribute\Models;

use Illuminate\Database\Eloquent\Model;

class AttributeTranslation extends Model
{
    public $timestamps = false;

    protected $fillable = ['name'];
}