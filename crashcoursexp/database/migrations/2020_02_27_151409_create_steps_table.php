<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('steps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("title");
            $table->unsignedBigInteger("templateId");
            $table->unsignedBigInteger("crashCourseId");
            $table->foreign("templateId")->references("id")->on("exercise_templates");
            $table->foreign("crashCourseId")->references("id")->on("crash_courses");
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
        Schema::dropIfExists('steps');
    }
}
