import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleNgNonBindableComponent } from './exmple-ng-non-bindable.component';

describe('ExmpleNgNonBindableComponent', () => {
  let component: ExmpleNgNonBindableComponent;
  let fixture: ComponentFixture<ExmpleNgNonBindableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleNgNonBindableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmpleNgNonBindableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
