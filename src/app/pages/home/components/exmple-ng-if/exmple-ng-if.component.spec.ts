import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleNgIfComponent } from './exmple-ng-if.component';

describe('ExmpleNgIfComponent', () => {
  let component: ExmpleNgIfComponent;
  let fixture: ComponentFixture<ExmpleNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmpleNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
