import { Component, OnInit } from '@angular/core';
import {Contatto} from '../contatto';
import {HttpClient} from '@angular/common/http';
import { ContattoDto } from '../contattoDto';
import { Observable } from 'rxjs';
import { ListaContattiDto } from '../listaContattiDto';
import { RubricaService } from '../rubrica-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
contatto: Contatto = new Contatto();

  constructor(private http: HttpClient, public rubrica: RubricaService) {
    this.aggiornaLista();
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  aggiungi(){
    const dto: ContattoDto = new ContattoDto();
    dto.contatto = this.contatto;
    const oss: Observable<ListaContattiDto> = this.http
    .post<ListaContattiDto>('http://localhost:8080/aggiungi', dto);
    oss.subscribe(l => this.rubrica.contatti = l.listaContatti);
    this.contatto = new Contatto();
  }
  // tslint:disable-next-line:typedef
  rimuovi(c: Contatto){
    const dto: ContattoDto = new ContattoDto();
    dto.contatto = c;
    const oss: Observable<ListaContattiDto> = this.http
    .post<ListaContattiDto>('http://localhost:8080/rimuovi', dto);
    oss.subscribe(l => this.rubrica.contatti = l.listaContatti);
  }
  // tslint:disable-next-line:typedef
  aggiornaLista(){
    const oss: Observable<ListaContattiDto> = this.http
      .get<ListaContattiDto>('http://localhost:8080/aggiorna');
    oss.subscribe(l => this.rubrica.contatti = l.listaContatti);
  }
}
