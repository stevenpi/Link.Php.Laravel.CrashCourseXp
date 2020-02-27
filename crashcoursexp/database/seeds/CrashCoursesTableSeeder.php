<?php

use App\CrashCourse;
use Illuminate\Database\Seeder;

class CrashCoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        CrashCourse::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            CrashCourse::create([
                'title' => $faker->sentence,
                'description' => $faker->sentence,
                'requirements' => $faker->sentence,
                'gettingStarted' => $faker->text,
            ]);
        }
    }
}
