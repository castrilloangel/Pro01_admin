import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaOvComponent } from './crear-cuenta-ov.component';

describe('CrearCuentaOvComponent', () => {
  let component: CrearCuentaOvComponent;
  let fixture: ComponentFixture<CrearCuentaOvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCuentaOvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCuentaOvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
