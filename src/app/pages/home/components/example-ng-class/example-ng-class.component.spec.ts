import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgClassComponent } from './example-ng-class.component';

describe('ExampleNgClassComponent', () => {
  let component: ExampleNgClassComponent;
  let fixture: ComponentFixture<ExampleNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
