import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgNonBindableComponent } from './exemple-ng-non-bindable.component';

describe('ExempleNgNonBindableComponent', () => {
  let component: ExempleNgNonBindableComponent;
  let fixture: ComponentFixture<ExempleNgNonBindableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleNgNonBindableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleNgNonBindableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
