<?php

namespace GAS\Attribute\Models;

use Illuminate\Database\Eloquent\Model;

class AttributeOptionTranslation extends Model
{
    public $timestamps = false;

    protected $fillable = ['title'];
}