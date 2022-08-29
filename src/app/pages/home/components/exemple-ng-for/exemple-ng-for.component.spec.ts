import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgForComponent } from './exemple-ng-for.component';

describe('ExempleNgForComponent', () => {
  let component: ExempleNgForComponent;
  let fixture: ComponentFixture<ExempleNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
