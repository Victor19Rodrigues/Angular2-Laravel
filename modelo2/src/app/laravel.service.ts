import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService{
  private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  private urlCadastro = 'http://localhost:8000/api/cadastro';
  private urlLogin = 'http://localhost:8000/api/login';
  private urlNoticia = 'http://localhost:8000/api/noticias?api_token=';

  constructor(private http:Http){}

  cadastro(name: string, email: string, password: string){
    return this.http
    .post(this.urlCadastro,'name='+name+'&email='+email+'&password='+password,{headers:this.headers})
    .toPromise().then(res=>res.json());
  }

  login(email: string, password: string){
    return this.http
    .post(this.urlLogin,'email='+email+'&password='+password,{headers:this.headers})
    .toPromise().then(res=>res.json());
  }

  getNoticia(token: string){
    return this.http
    .get(this.urlNoticia+token)
    .toPromise().then(res=>res.json());
  }

  //cria uma sessão no browser
  setUsuario(usuario){
    window.sessionStorage.setItem("usuarioNome", usuario.nome);
    window.sessionStorage.setItem("usuarioEmail", usuario.email);
    window.sessionStorage.setItem("usuarioToken", usuario.token);
  }

  getUsuario(){
    return{
      nome: window.sessionStorage.getItem('usuarioNome'),
      email: window.sessionStorage.getItem('usuarioEmail'),
      token: window.sessionStorage.getItem('usuarioToken')
    };
  }
}