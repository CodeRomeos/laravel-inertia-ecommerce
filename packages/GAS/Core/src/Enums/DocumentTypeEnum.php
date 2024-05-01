<?php

namespace GAS\Core\Enums;

enum DocumentTypeEnum: string
{
    case DEFAULT = 'DEFAULT';
    case PROFILE_IMAGE = 'PROFILE_IMAGE';
    case FEATURED_IMAGE = 'FEATURED_IMAGE';
    case CAROUSEL = 'CAROUSEL';
    case BANNER = 'BANNER';
}
