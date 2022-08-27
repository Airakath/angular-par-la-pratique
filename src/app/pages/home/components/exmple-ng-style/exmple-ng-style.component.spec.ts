import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleNgStyleComponent } from './exmple-ng-style.component';

describe('ExmpleNgStyleComponent', () => {
  let component: ExmpleNgStyleComponent;
  let fixture: ComponentFixture<ExmpleNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmpleNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
