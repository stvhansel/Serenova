<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\question;
use App\Models\User;

class questionController extends Controller
{

    public function index()
    {
        $questions = question::all();
        return response()->json($questions);
    }

    public function store(Request $request)
    {
        $user = User::find($request->id);

        $question = new question;
        $question->id_user = $user->id;
        $question->anxiety_level = $request->anxiety_level;
        $question->self_esteem = $request->self_esteem;
        $question->mental_health_history = $request->mental_health_history;
        $question->depression = $request->depression;
        $question->blood_pressure = $request->blood_pressure;
        $question->sleep_quality = $request->sleep_quality;
        $question->breathing_problem = $request->breathing_problem;
        $question->noise_level = $request->noise_level;
        $question->living_conditions = $request->living_conditions;
        $question->safety = $request->safety;
        $question->basic_needs = $request->basic_needs;
        $question->academic_performance = $request->academic_performance;
        $question->study_load = $request->study_load;
        $question->teacher_student_relationship = $request->teacher_student_relationship;
        $question->future_career_concerns = $request->future_career_concerns;
        $question->social_support = $request->social_support;
        $question->peer_pressure = $request->peer_pressure;
        $question->extracurricular_activities = $request->extracurricular_activities;
        $question->bullying = $request->bullying;
        $question->stress_level = $request->stress_level;
        $question->save();

        return response()->json($question);
    }

    public function show($id)
    {
        $question = question::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }
        return response()->json($question);
    }

    public function update(Request $request, $id)
    {
        $question = question::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }

        $request->validate([
            'pertanyaan' => 'required',
            'jawaban' => 'required',
        ]);

        $question->pertanyaan = $request->pertanyaan;
        $question->jawaban = $request->jawaban;
        $question->save();

        return response()->json($question);
    }

    public function destroy($id)
    {
        $question = question::find($id);
        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }
        $question->delete();
        return response()->json(['message' => 'Question deleted successfully']);
    }
}
