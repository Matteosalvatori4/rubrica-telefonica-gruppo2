import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Contatto} from '../contatto';
import {RubricaService} from '../rubrica-service.service';

@Component({
  selector: 'app-table-rubrica',
  templateUrl: './table-rubrica.component.html',
  styleUrls: ['./table-rubrica.component.css']
})
export class TableRubricaComponent implements OnInit {
  @Output() cancella: EventEmitter<Contatto> = new EventEmitter<Contatto>();
  constructor(public rubrica: RubricaService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  cancellaContatto(c: Contatto) {
    this.cancella.emit(c);
  }
}
