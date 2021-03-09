import { Component, OnInit } from '@angular/core';
import {Contatto} from '../contatto';
import {RubricaService} from '../rubrica-service.service';

@Component({
  selector: 'app-table-rubrica',
  templateUrl: './table-rubrica.component.html',
  styleUrls: ['./table-rubrica.component.css']
})
export class TableRubricaComponent implements OnInit {
  contatti;
  constructor(public rubrica: RubricaService) {
    this.contatti = rubrica.contatti;
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  cancella(c: Contatto) {
  }
}
