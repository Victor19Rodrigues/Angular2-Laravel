<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/noticias', function (Request $request) {
    header('Access-Control-Allow-Origin: *');
    //$user = $request->user();
    $noticias = App\Noticia::all();

    return response()->json(['data'=>$noticias,'status'=>true]);

})->middleware('auth:api');

Route::post('/login', function(Request $request){
  header('Access-Control-Allow-Origin: *');
  $dados = $request->all();
  if(Auth::attempt(['email'=>$dados['email'], 'password'=>$dados['password']])){
    return response()->json(['data'=>Auth::user(),'status'=>true]);
  }else{
    return response()->json(['data'=>'Erro no login!','status'=>false]);
  }

});

Route::post('/cadastro',['uses'=>'CadastroController@cadastro']);
