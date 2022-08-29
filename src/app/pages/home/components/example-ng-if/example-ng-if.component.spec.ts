import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgIfComponent } from './example-ng-if.component';

describe('ExampleNgIfComponent', () => {
  let component: ExampleNgIfComponent;
  let fixture: ComponentFixture<ExampleNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
