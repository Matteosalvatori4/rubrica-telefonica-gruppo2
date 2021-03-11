import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CriterioDto } from '../criterioDto';
import { ListaContattiDto } from '../listaContattiDto';
import { RubricaService } from '../rubrica-service.service';
import {Contatto} from '../contatto';
import {ContattoDto} from '../contattoDto';
import {CriterioContattoDto} from '../CriterioContattoDto';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
criterio: string;

  constructor(private http: HttpClient, public rubrica: RubricaService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  cerca(){
    // tslint:disable-next-line:new-parens
    const dto: CriterioDto = new CriterioDto;
    dto.criterio = this.criterio;
    const oss: Observable<ListaContattiDto> = this.http
    .post<ListaContattiDto>('http://localhost:8080/cerca', dto);
    oss.subscribe(l => this.rubrica.contatti = l.listaContatti);
  }
  // tslint:disable-next-line:typedef
  rimuovi(c: Contatto){
    const dto: CriterioContattoDto = new CriterioContattoDto();
    dto.contatto = c;
    dto.criterio = this.criterio;
    const oss: Observable<ListaContattiDto> = this.http
      .post<ListaContattiDto>('http://localhost:8080/rimuovi-filtrati', dto);
    oss.subscribe(l => this.rubrica.contatti = l.listaContatti);
  }
}
