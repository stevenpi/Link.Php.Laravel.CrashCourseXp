<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExerciseTemplateVarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exercise_template_vars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("key");
            $table->string("value");
            $table->unsignedBigInteger("templateId");
            $table->foreign("templateId")->references('id')->on("exercise_templates");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exercise_template_vars');
    }
}
