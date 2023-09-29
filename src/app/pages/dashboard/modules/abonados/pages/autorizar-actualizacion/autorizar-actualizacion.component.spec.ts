import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarActualizacionComponent } from './autorizar-actualizacion.component';

describe('AutorizarActualizacionComponent', () => {
  let component: AutorizarActualizacionComponent;
  let fixture: ComponentFixture<AutorizarActualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizarActualizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizarActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
