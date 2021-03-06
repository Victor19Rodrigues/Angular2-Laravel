import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {WebService} from '../laravel.service';


@Component({
  selector: 'entrar',
  styleUrls: ['./entrar.css'],
  templateUrl: './entrar.html'
})

export class Entrar {
    constructor(private webService: WebService, private route: Router ){}

    private usuario = {email:'',senha:''};
    private msg = '';

    login(){
    var self = this;
    this.webService.login(self.usuario.email,self.usuario.senha)
    .then(function(retorno){       
      if(retorno.status){
        console.log(retorno.data);
        self.usuario = {email:'',senha:''};
        self.webService.setUsuario({nome:retorno.data.name,email:retorno.data.email, token:retorno.data.api_token});
        self.route.navigateByUrl('home');
    }else{
        console.log(retorno.data);
        self.msg = retorno.data;
      }
    });
  }
}
