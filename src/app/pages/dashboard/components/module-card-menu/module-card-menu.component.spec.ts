import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCardMenuComponent } from './module-card-menu.component';

describe('ModuleCardMenuComponent', () => {
  let component: ModuleCardMenuComponent;
  let fixture: ComponentFixture<ModuleCardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleCardMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleCardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
