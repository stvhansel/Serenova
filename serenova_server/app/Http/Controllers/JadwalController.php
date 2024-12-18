<?php

namespace App\Http\Controllers;

use App\Mail\NotifJadwal;
use Illuminate\Http\Request;
use App\Models\Jadwal;
use App\Models\Kalender;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class JadwalController extends Controller
{

    public function warningNotif() {
        $today = Carbon::today()->format('Y-m-d');
        $jadwals = Jadwal::select(DB::raw('TIMEDIFF(jadwal.end_time, jadwal.start_time) as total'))
            ->where('jenis', 'work')
            ->whereDate('jadwal.created_at', $today)
            ->get();

        $total = 0;
        foreach ($jadwals as $j) {
            $total += strtotime($j->total);
        }

        if ($total > strtotime('09:00:00')) {
            // return response()->json(['message' => 'Total work time is more than 9 hours', 'data' => $total]);
            return response()->json(['result' => true]);
        }else {
            // return response()->json(['message' => 'Total work time is less than 9 hours', 'data' => $total]);
            return response()->json(['result' => false]);
        }
    }

    public function todayTask(){
        $today = Carbon::today()->format('Y-d-m');

        $jadwals = Jadwal::select('jadwal.*', 'kalender.tanggal')
            ->join('kalender', 'jadwal.id_kalender', '=', 'kalender.id_kalender')
            ->whereDate('kalender.tanggal',$today)
            ->get();

        return response()->json($jadwals);

    }

    public function todayEmail() {
        $today = Carbon::today()->format('Y-m-d');
        $jadwals = Jadwal::select('jadwal.*', 'kalender.tanggal', 'user_kalender.id_user')->join('kalender', 'jadwal.id_kalender', '=', 'kalender.id_kalender')->join('user_kalender', 'kalender.id_kalender', '=', 'user_kalender.id_kalender')->whereDate('kalender.tanggal', $today)->get();

        if(is_null($jadwals)){
            return response()->json(['message' => "Tidak ada jadwal hari ini"]);
        }

        foreach ($jadwals as $j) {
            $user = User::find($j->id_user);
            if(is_null($user)){
                return response()->json(['message' => "User tidak ditemukan"]);
            }
            Mail::to($user->email)->send(new NotifJadwal($j));
        }

        return response()->json($jadwals);
    }

    public function countJenis()
    {
        $total = Jadwal::all()->count();
        $jenis = Jadwal::select('jenis', DB::raw('count(*) as count'))
            ->groupBy('jenis')
            ->get();
        foreach ($jenis as $j) {
            $j->percentage = number_format(($j->count / $total) * 100, 0);
        }
        return response()->json($jenis);
    }

    public function index()
    {
        $jadwal = Jadwal::select('jadwal.*', 'kalender.tanggal')
            ->join('kalender', 'jadwal.id_kalender', '=', 'kalender.id_kalender')
            ->get();
        return response()->json($jadwal);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:users,id',
            'nama' => 'required',
            'jenis' => 'required|in:work,exercise,daily',
            'date' => 'required',
            'startTime' => 'nullable',
            'endTime' => 'nullable',
            'note' => 'nullable'
        ]);

        $date = date('Y-m-d', strtotime($request->date));
        $startTime = date('H:i:s', strtotime($request->startTime));
        $endTime = date('H:i:s', strtotime($request->endTime));

        $kalender = Kalender::where('tanggal', '=', $date)->first();

        if($kalender == null) {
            $user = User::find($request->id);

            if ($user == null) {
                return response()->json([
                    'success' => false,
                    'message' => 'User tidak ditemukan',
                    'data' => null
                ]);
            }

            $kalender = new Kalender;
            $kalender->tanggal = $date;
            $user->kalender()->save($kalender);
        }

        $jadwal = new Jadwal([
            'nama' => $request->nama,
            'jenis' => $request->jenis,
            'id_kalender' => $kalender->id_kalender,
            'start_time' => $startTime,
            'end_time' => $endTime,
            'note' => $request->note
        ]);

        $jadwal->save();

        return response()->json([
            'success' => true,
            'message' => 'Jadwal baru telah ditambahkan',
            'data' => $jadwal
        ]);
    }

    public function show($id)
    {
        $jadwal = Jadwal::find($id);
        return response()->json($jadwal);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'nullable',
            'jenis' => 'required|in:work,exercise,daily',
            'date' => 'required',
            'note' => 'nullable'
        ]);

        $kalender = Kalender::where('tanggal', '=',$request->date)->first();

        if($kalender == null) {
            $user = User::find($request->id);

            $kalender = new Kalender;
            $kalender->tanggal = $request->date;
            $user->kalender()->save($kalender);
        }

        $jadwal = Jadwal::find($id);
        $jadwal->nama = $request->nama;
        $jadwal->jenis = $request->jenis;
        $jadwal->id_kalender = $kalender->id_kalender;
        $jadwal->note = $request->note;
        $jadwal->save();

        return response()->json($jadwal);
    }

    public function destroy($id)
    {
        $jadwal = Jadwal::find($id);
        $jadwal->delete();

        return response()->json('Jadwal deleted');
    }
}
