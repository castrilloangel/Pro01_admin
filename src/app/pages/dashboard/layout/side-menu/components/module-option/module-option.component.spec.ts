import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOptionComponent } from './module-option.component';

describe('ModuleOptionComponent', () => {
  let component: ModuleOptionComponent;
  let fixture: ComponentFixture<ModuleOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
