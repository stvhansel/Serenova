<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\photoProfile;

class photoProfileController extends Controller
{

    public function getAll()
    {
        $photo_profiles = photoProfile::all();

        return response()->json($photo_profiles);
    }

    public function getOne($id)
    {
        $photo_profile = photoProfile::find($id);

        return response()->json($photo_profile);
    }


    public function store(Request $request)
    {
        $request->validate([
            'url' => 'required',
        ]);

        $photo_profile = new photoProfile();
        $photo_profile->url = $request->input('url');
        $photo_profile->save();

        return response()->json($photo_profile);
    }
}
