import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRubricaComponent } from './table-rubrica.component';

describe('TableRubricaComponent', () => {
  let component: TableRubricaComponent;
  let fixture: ComponentFixture<TableRubricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRubricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRubricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
