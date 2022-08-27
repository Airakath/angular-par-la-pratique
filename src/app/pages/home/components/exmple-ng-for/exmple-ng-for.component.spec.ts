import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmpleNgForComponent } from './exmple-ng-for.component';

describe('ExmpleNgForComponent', () => {
  let component: ExmpleNgForComponent;
  let fixture: ComponentFixture<ExmpleNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmpleNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmpleNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
