<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('question', function (Blueprint $table) {
            $table->id('id_question');
            $table->foreignId('id_user')->constrained('users', 'id');
            $table->integer('anxiety_level');
            $table->integer('self_esteem');
            $table->integer('mental_health_history');
            $table->integer('depression');
            $table->integer('blood_pressure');
            $table->integer('sleep_quality');
            $table->integer('breathing_problem');
            $table->integer('noise_level');
            $table->integer('living_conditions');
            $table->integer('safety');
            $table->integer('basic_needs');
            $table->integer('academic_performance');
            $table->integer('study_load');
            $table->integer('teacher_student_relationship');
            $table->integer('future_career_concerns');
            $table->integer('social_support');
            $table->integer('peer_pressure');
            $table->integer('extracurricular_activites');
            $table->integer('bullying');
            $table->integer('stress_level');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('question');
    }
};
