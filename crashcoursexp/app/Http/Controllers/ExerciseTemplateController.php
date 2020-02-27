<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ExerciseTemplate;

class ExerciseTemplateController extends Controller
{
    public function index()
    {
        return ExerciseTemplate::all();
    }

    public function show(ExerciseTemplate $crashCourse)
    {
        return $crashCourse;
    }

    public function store(Request $request)
    {
        $crashCourse = ExerciseTemplate::create($request->all());
        return response()->json($crashCourse, 201);
    }

    public function update(Request $request, ExerciseTemplate $crashCourse)
    {
        $crashCourse->update($request->all());
        return response()->json($crashCourse, 200);
    }

    public function delete(ExerciseTemplate $crashCourse)
    {
        $crashCourse->delete();
        return response()->json(null, 204);
    }
}
