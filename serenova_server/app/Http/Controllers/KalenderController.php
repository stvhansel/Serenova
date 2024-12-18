<?php

namespace App\Http\Controllers;

use App\Models\Kalender;
use App\Models\User;
use Carbon\Carbon;

use Illuminate\Http\Request;

class KalenderController extends Controller
{
    public function index()
    {
        $kalenders = Kalender::all();
        return response()->json($kalenders);
    }

    public function store(Request $request)
    {
        $request->validate([
            'tanggal' => 'required',
        ]);

        $user = User::find($request->id);

        $kalender = new Kalender;
        $kalender->tanggal = $request->tanggal;
        $user->kalender()->save($kalender);

        return response()->json($kalender);
    }

    public function show($id)
    {
        $kalender = Kalender::find($id);
        return response()->json($kalender);
    }

    public function new()
    {
        $now = Carbon::today()->format('Y-m-d');
        $kalender = Kalender::whereDate('tanggal', '=>', $now)->get();
        return response()->json("test");
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'tanggal' => 'required',
        ]);

        $kalender = Kalender::find($id);
        $kalender->tanggal = $request->tanggal;
        $kalender->save();

        return response()->json($kalender);
    }

    public function destroy($id)
    {
        $kalender = Kalender::find($id);
        $kalender->delete();

        return response()->json('Kalender deleted');
    }
}
