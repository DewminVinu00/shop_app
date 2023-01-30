import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousblanketComponent } from './luminousblanket.component';

describe('LuminousblanketComponent', () => {
  let component: LuminousblanketComponent;
  let fixture: ComponentFixture<LuminousblanketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuminousblanketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuminousblanketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
