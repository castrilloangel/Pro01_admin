import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosTransferenciasComponent } from './depositos-transferencias.component';

describe('DepositosTransferenciasComponent', () => {
  let component: DepositosTransferenciasComponent;
  let fixture: ComponentFixture<DepositosTransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositosTransferenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositosTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
