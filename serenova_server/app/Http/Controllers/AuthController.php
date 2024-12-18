<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function getUser(){
        $user = Auth::user();
        return response()->json($user->id);
    }

    public function send_reset(Request $request) {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return response()->json($status === Password::RESET_LINK_SENT ? 'Reset link sent successfully' : 'Reset link failed');
    }

    public function reset_password(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $status = Password::reset(
            $request->only('email', 'password'),
            function (User $user, string $password){
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(str()->random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return response()->json($status === Password::PASSWORD_RESET ? 'Password reset successfully' : 'Password reset failed');

    }

    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => 'Error',
                'data' => $validator->errors()
            ]);
        }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        $success['token'] = $user->createToken('auth_token')->plainTextToken;
        $success['name'] = $user->name;

        return response()->json([
            'success' => true,
            'message' => 'Register Sukses',
            'data' => $success
        ]);
    }

    public function login(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $auth = User::where('email', $request->email)->first();
            $success['token'] = $auth->createToken('auth_token')->plainTextToken;
            $success['name'] = $auth->name;

            return response()->json([
                'success' => true,
                'message' => 'Login Sukses',
                'data' => $success
            ]);
        }else {
            return response()->json([
                'success' => false,
                'message' => 'Email atau Password anda salah',
                'data' => null
            ]);
        }
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'success' => true,
            'message' => 'Logout berhasil'
        ]);
    }
}
