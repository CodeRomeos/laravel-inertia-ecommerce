<?php

namespace GAS\Core\Http\Controllers;

use Exception;
use stdClass;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class BaseController extends Controller
{
    public function success($message = null)
    {
        return new JsonResponse([
            'status' => true,
            'message' => $message ?? 'success'
        ], 200);
    }

    public function successWithNoContent($message = null)
    {
        return new JsonResponse([
            'status' => false,
            'message' => $message ?? 'success'
        ], 200);
    }

    public function successWithData($data, $message = null)
    {
        return new JsonResponse([
            'status' => true,
            'message' => $message ?? 'success',
            'data' => $data
        ], 200);
    }

    public function successWithPaginateData($data, $paginateData, $message = null)
    {
        return new JsonResponse([
            'status' => true,
            'message' => $message ?? 'success',
            'data' => $data,
            'paginate_data' => $this->paginateDataExtract($paginateData)
        ], 200);
    }

    public function validationError($message)
    {
        $object = new stdClass;
        $object->message = [$message];

        return new JsonResponse([
            "message" => "validation error " . $message,
            "errors" => $object
        ], 422);
    }

    public function noContent($message = null)
    {
        return new JsonResponse([
            'message' => $message ?? 'not found'
        ], 204);
    }

    public function notFound($message = null)
    {
        return new JsonResponse([
            'message' => $message ?? 'not found'
        ], 404);
    }

    public function badRequest($message = null)
    {
        return new JsonResponse([
            'message' => $message ?? 'invalid request'
        ], 400);
    }

    public function error(Exception $ex, $message = null)
    {
        return new JsonResponse([
            'message' => $message ?? 'an error occurred',
            'exception' => $ex
        ], 500);
    }

    function paginateDataExtract($model)
    {
        return collect($model->toArray())->forget('data');
    }
}
