import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleNgClassComponent } from './exmple-ng-class.component';

describe('ExmpleNgClassComponent', () => {
  let component: ExmpleNgClassComponent;
  let fixture: ComponentFixture<ExmpleNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmpleNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
