import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../utente';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  utente: Utente = new Utente();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.utente.password == "1"){
      this.router.navigateByUrl('/main-page');
    }else{
      this.router.navigateByUrl('/error-page');
    }
  }
}
