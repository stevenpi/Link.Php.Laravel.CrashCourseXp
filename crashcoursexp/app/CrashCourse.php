<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CrashCourse extends Model
{
    protected $fillable = ['title', 'description', 'requirements', 'gettingStarted'];
}
