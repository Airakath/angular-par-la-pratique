import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAttributeBindingComponent } from './example-attribute-binding.component';

describe('ExampleAttributeBindingComponent', () => {
  let component: ExampleAttributeBindingComponent;
  let fixture: ComponentFixture<ExampleAttributeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAttributeBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleAttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
