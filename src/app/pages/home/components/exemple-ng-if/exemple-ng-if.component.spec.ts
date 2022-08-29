import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleNgIfComponent } from './exemple-ng-if.component';

describe('ExempleNgIfComponent', () => {
  let component: ExempleNgIfComponent;
  let fixture: ComponentFixture<ExempleNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
