import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleNgSwitchComponent } from './exmple-ng-switch.component';

describe('ExmpleNgSwitchComponent', () => {
  let component: ExmpleNgSwitchComponent;
  let fixture: ComponentFixture<ExmpleNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmpleNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
