import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleEventBindingComponent } from './example-event-binding.component';

describe('ExampleEventBindingComponent', () => {
  let component: ExampleEventBindingComponent;
  let fixture: ComponentFixture<ExampleEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleEventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
