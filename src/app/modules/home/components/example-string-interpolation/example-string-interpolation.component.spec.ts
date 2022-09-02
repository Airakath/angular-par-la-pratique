import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStringInterpolationComponent } from './example-string-interpolation.component';

describe('ExampleStringInterpolationComponent', () => {
  let component: ExampleStringInterpolationComponent;
  let fixture: ComponentFixture<ExampleStringInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleStringInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleStringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
