<?php

namespace GAS\Product\Enums;

enum ProductTypeEnum: string
{
    case simple = 'simple';
    case grouped = 'grouped';
    case configurable = 'configurable';
    case virtual = 'virtual';
    case downloadable = 'downloadable';
    case bundle = 'bundle';
}
