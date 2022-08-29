import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgForComponent } from './example-ng-for.component';

describe('ExampleNgForComponent', () => {
  let component: ExampleNgForComponent;
  let fixture: ComponentFixture<ExampleNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
