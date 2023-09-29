import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosServiciosMensualesSuscritosComponent } from './datos-servicios-mensuales-suscritos.component';

describe('DatosServiciosMensualesSuscritosComponent', () => {
  let component: DatosServiciosMensualesSuscritosComponent;
  let fixture: ComponentFixture<DatosServiciosMensualesSuscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosServiciosMensualesSuscritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosServiciosMensualesSuscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
