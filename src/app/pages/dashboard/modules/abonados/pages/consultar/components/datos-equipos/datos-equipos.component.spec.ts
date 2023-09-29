import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEquiposComponent } from './datos-equipos.component';

describe('DatosEquiposComponent', () => {
  let component: DatosEquiposComponent;
  let fixture: ComponentFixture<DatosEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEquiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
