<?php

namespace App\Http\Controllers;

use App\Step;
use Illuminate\Http\Request;

class StepController extends Controller
{
    public function index()
    {
        return Step::all();
    }

    public function show(Step $crashCourse)
    {
        return $crashCourse;
    }

    public function store(Request $request)
    {
        $crashCourse = Step::create($request->all());
        return response()->json($crashCourse, 201);
    }

    public function update(Request $request, Step $crashCourse)
    {
        $crashCourse->update($request->all());
        return response()->json($crashCourse, 200);
    }

    public function delete(Step $crashCourse)
    {
        $crashCourse->delete();
        return response()->json(null, 204);
    }
}
