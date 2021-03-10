import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CriterioDto } from '../criterioDto';
import { ListaContattiDto } from '../listaContattiDto';
import { RubricaService } from '../rubrica-service.service';

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
    const dto: CriterioDto = new CriterioDto;
    dto.criterio = this.criterio;
    const oss: Observable<ListaContattiDto> = this.http
    .post<ListaContattiDto>('http://localhost:8080/cerca', dto);
    oss.subscribe(l => this.rubrica.contatti = l.listaContatti);
  }
  // tslint:disable-next-line:typedef
  rimuovi(){
  }
}
