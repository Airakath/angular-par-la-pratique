import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgSwitchComponent } from './exemple-ng-switch.component';

describe('ExempleNgSwitchComponent', () => {
  let component: ExempleNgSwitchComponent;
  let fixture: ComponentFixture<ExempleNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
