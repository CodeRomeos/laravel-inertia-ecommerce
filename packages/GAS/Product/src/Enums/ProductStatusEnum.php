<?php

namespace GAS\Product\Enums;

enum ProductStatusEnum: string
{
    case inactive = 0;
    case active = 1;
    case draft = 2;
    case pending = 3;
}
