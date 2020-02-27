<?php

namespace App\Http\Controllers;

use App\ExerciseTemplateVars;
use Illuminate\Http\Request;

class ExerciseTemplateVarsController extends Controller
{
    public function index()
    {
        return ExerciseTemplateVars::all();
    }

    public function show(ExerciseTemplateVars $crashCourse)
    {
        return $crashCourse;
    }

    public function store(Request $request)
    {
        $crashCourse = ExerciseTemplateVars::create($request->all());
        return response()->json($crashCourse, 201);
    }

    public function update(Request $request, ExerciseTemplateVars $crashCourse)
    {
        $crashCourse->update($request->all());
        return response()->json($crashCourse, 200);
    }

    public function delete(ExerciseTemplateVars $crashCourse)
    {
        $crashCourse->delete();
        return response()->json(null, 204);
    }
}
