import {Component} from '@angular/core';

import { Router } from '@angular/router';
import {WebService} from '../laravel.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
    constructor(private webService: WebService, private route: Router ){
      if(!this.webService.getUsuario().nome){
        this.route.navigateByUrl('entrar');         
      }
      let self = this;
      this.webService.getNoticia(this.webService.getUsuario().token).then(function(retorno){
        if(retorno.status){
          self.noticias = retorno.data;
        }else{
           self.route.navigateByUrl('entrar');         
        }
      });
    }

    private noticias;

}