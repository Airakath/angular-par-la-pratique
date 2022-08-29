import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgStyleComponent } from './exemple-ng-style.component';

describe('ExempleNgStyleComponent', () => {
  let component: ExempleNgStyleComponent;
  let fixture: ComponentFixture<ExempleNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
