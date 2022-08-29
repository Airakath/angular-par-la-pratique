import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgNonBindableComponent } from './example-ng-non-bindable.component';

describe('ExampleNgNonBindableComponent', () => {
  let component: ExampleNgNonBindableComponent;
  let fixture: ComponentFixture<ExampleNgNonBindableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgNonBindableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNgNonBindableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
