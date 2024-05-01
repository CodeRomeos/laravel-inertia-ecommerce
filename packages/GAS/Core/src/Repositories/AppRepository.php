<?php

namespace GAS\Core\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class AppRepository
{
    /**
     * Eloquent model instance.
     */
    protected $model;
    /**
     * load default class dependencies.
     * 
     * @param Model $model Illuminate\Database\Eloquent\Model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }
    /**
     * get all the items collection from database table using model.
     * 
     * @return Collection of items.
     */
    public function get()
    {
        return $this->model->get();
    }

    public function find($args)
    {
        return $this->model->find($args);
    }

    public function query()
    {
        return $this->model->query();
    }
    /**
     * get collection of items in paginate format.
     * 
     * @return Collection of items.
     */
    public function paginate(Request $request)
    {
        return $this->model->paginate($request->input('limit', 10));
    }
    /**
     * create new record in database.
     * 
     * @param Request $request Illuminate\Http\Request
     * @return saved model object with data.
     */
    public function store(Request $request)
    {
        $data = $this->setDataPayload($request);
        $item = $this->model;
        $item->fill($data);
        $item->save();
        return $item;
    }
    /**
     * update existing item.
     * 
     * @param  Integer $id integer item primary key.
     * @param Request $request Illuminate\Http\Request
     * @return send updated item object.
     */
    public function update($id, Request $request)
    {
        $data = $this->setDataPayload($request);
        $item = $this->model->findOrNew($id);
        $item->fill($data);
        $item->save();
        return $item;
    }

    public function replicate($id, Request $request)
    {
        if (!$id) {
            return $this->store($request);
        }

        $oldModel = $this->show($id);

        $replicateModel = $oldModel->replicate();
        $data = $this->setDataPayload($request);
        $replicateModel->fill($data);
        $replicateModel->save();

        return $replicateModel;
    }
    /**
     * get requested item and send back.
     * 
     * @param  Integer $id: integer primary key value.
     * @return send requested item data.
     */
    public function show($id)
    {
        return $this->model->findOrFail($id);
    }

    function findOrFail($id)
    {
        return $this->model->findOrFail($id);
    }

    public function showWithRelation($id, array $relations)
    {
        return $this->model->with($relations)->findOrFail($id);
    }

    public function findMany(array $ids)
    {
        return $this->model->findMany($ids);
    }

    public function findManyBySlug(array $slugs)
    {
        return $this->model->whereIn('slug', $slugs)->get();
    }

    public function findByArray($array)
    {
        return $this->model->where($array)->first();
    }

    public function softDelete($id)
    {
        return $this->model->where('id', $id)->delete();
    }

    /**
     * Delete item by primary key id.
     * 
     * @param  Integer $id integer of primary key id.
     * @return boolean
     */
    public function delete($id)
    {
        return $this->model->destroy($id);
    }
    /**
     * set data for saving
     * 
     * @param  Request $request Illuminate\Http\Request
     * @return array of data.
     */
    protected function setDataPayload(Request $request)
    {
        return $request->all();
    }
}
