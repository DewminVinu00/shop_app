import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyToysComponent } from './baby-toys.component';

describe('BabyToysComponent', () => {
  let component: BabyToysComponent;
  let fixture: ComponentFixture<BabyToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
