import { Component, OnInit } from '@angular/core';
import {Contatto} from '../contatto';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
contatto: Contatto = new Contatto();

  constructor(private http: HttpClientModule) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  aggiungi(){
  }
  // tslint:disable-next-line:typedef
  rimuovi(){
  }
}
