import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Contatto} from './contatto';
import { ListaContattiDto } from './listaContattiDto';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {
contatti: Contatto[];
  constructor(private http:HttpClient) {
    this.aggiornaLista;
   }

  aggiornaLista(){
    const oss: Observable<ListaContattiDto> = this.http
    .get<ListaContattiDto>('http://localhost:8080/aggiorna');
    oss.subscribe(l => this.contatti= l.listaContatti);
  }
}
