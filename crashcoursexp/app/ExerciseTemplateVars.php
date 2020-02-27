<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExerciseTemplateVars extends Model
{
    protected $fillable = ["key", "value", "templateId"];
}
