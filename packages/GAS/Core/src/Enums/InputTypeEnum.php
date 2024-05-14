<?php

namespace GAS\Core\Enums;

enum InputTypeEnum: string
{
    case text = 'text';
    case textarea = 'textarea';
    case price = 'price';
    case number = 'number';
    case select = 'select';
    case multiselect = 'multiselect';
    case boolean = 'boolean';
    case date = 'date';
}
