import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabygiftpackComponent } from './babygiftpack.component';

describe('BabygiftpackComponent', () => {
  let component: BabygiftpackComponent;
  let fixture: ComponentFixture<BabygiftpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabygiftpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabygiftpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
