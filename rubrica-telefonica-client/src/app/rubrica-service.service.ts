import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Contatto} from './contatto';
import { ListaContattiDto } from './listaContattiDto';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {
contatti: Array<Contatto> = [];
  constructor(private http: HttpClient ) {
   }
}
