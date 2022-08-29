import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgModelComponent } from './example-ng-model.component';

describe('ExampleNgModelComponent', () => {
  let component: ExampleNgModelComponent;
  let fixture: ComponentFixture<ExampleNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
