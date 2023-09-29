import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadpanelComponent } from './headpanel.component';

describe('HeadpanelComponent', () => {
  let component: HeadpanelComponent;
  let fixture: ComponentFixture<HeadpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
