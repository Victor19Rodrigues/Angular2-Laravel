<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;

class CadastroController extends Controller
{
    public function cadastro(Request $request)
    {
      header('Access-Control-Allow-Origin: *');
      $dados = $request->all();
      $dados['api_token'] = str_random(60);

      if(!User::where('email',$dados['email'])->count()){
        $dados['password'] = bcrypt($dados['password']);
        $user = User::create($dados);
        return response()->json(['data'=>$user,'status'=>true]);
      }

      return response()->json(['data'=>'Esse e-mail já está cadastrado','status'=>false]);

    }
}
