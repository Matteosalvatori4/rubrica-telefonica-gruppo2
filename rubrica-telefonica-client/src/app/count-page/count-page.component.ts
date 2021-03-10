import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaDto } from '../contaDto';


@Component({
  selector: 'app-count-page',
  templateUrl: './count-page.component.html',
  styleUrls: ['./count-page.component.css']
})
export class CountPageComponent implements OnInit {
  conta: number;

  constructor(private http: HttpClient) { this.contaContatti(); }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  contaContatti(){
    const oss: Observable<ContaDto> = this.http
    .get<ContaDto>('http://localhost:8080/conta');
    oss.subscribe(l => this.conta = l.contatore);
  }

}
