<?php

namespace GAS\Core\Helpers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GlobalHelper
{
    public static function dbTryCatch($fn)
    {
        DB::beginTransaction();
        try {
            $result = $fn();
            DB::commit();
            return $result;
        } catch (\Throwable $th) {
            Log::error($th);
            DB::rollBack();
            return false;
        }
    }
}
