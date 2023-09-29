import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosResidenciaComponent } from './datos-residencia.component';

describe('DatosResidenciaComponent', () => {
  let component: DatosResidenciaComponent;
  let fixture: ComponentFixture<DatosResidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosResidenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
