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

  // tslint:disable-next-line:typedef
  login(){
    if (this.utente.username === 'Gruppo_2' && this.utente.password === 'ngbananainthebox'){
      this.router.navigateByUrl('/main-page');
    }else{
      this.router.navigateByUrl('/error-page');
    }
  }
}
