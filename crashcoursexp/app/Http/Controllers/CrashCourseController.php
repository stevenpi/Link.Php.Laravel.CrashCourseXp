<?php

namespace App\Http\Controllers;

use App\CrashCourse;
use Illuminate\Http\Request;

class CrashCourseController extends Controller
{
    public function index()
    {
        return CrashCourse::all();
    }

    public function show(CrashCourse $crashCourse)
    {
        return $crashCourse;
    }

    public function store(Request $request)
    {
        $crashCourse = CrashCourse::create($request->all());
        return response()->json($crashCourse, 201);
    }

    public function update(Request $request, CrashCourse $crashCourse)
    {
        $crashCourse->update($request->all());
        return response()->json($crashCourse, 200);
    }

    public function delete(CrashCourse $crashCourse)
    {
        $crashCourse->delete();
        return response()->json(null, 204);
    }
}
