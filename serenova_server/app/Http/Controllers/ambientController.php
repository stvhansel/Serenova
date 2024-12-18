<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class ambientController extends Controller
{

    public function getAmbientMP3()
    {
        $file = Storage::disk('ambient')->path('Rain Sounds.mp3');
        return response()->file($file, ['Content-Type' => 'audio/mpeg']);
    }
}
