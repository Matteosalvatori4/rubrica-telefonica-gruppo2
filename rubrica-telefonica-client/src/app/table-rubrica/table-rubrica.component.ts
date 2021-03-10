import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Contatto} from '../contatto';
import { ContattoDto } from '../contattoDto';
import {RubricaService} from '../rubrica-service.service';

@Component({
  selector: 'app-table-rubrica',
  templateUrl: './table-rubrica.component.html',
  styleUrls: ['./table-rubrica.component.css']
})
export class TableRubricaComponent implements OnInit {
  contatti;
  @Output() rimuovi: EventEmitter<Contatto> = new EventEmitter<Contatto>();

  constructor(public rubrica: RubricaService) {
    this.contatti = rubrica.contatti;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  cancella(c: Contatto) {
    this.rimuovi.emit(c);
  }
}
