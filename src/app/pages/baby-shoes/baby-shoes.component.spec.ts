import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShoesComponent } from './baby-shoes.component';

describe('BabyShoesComponent', () => {
  let component: BabyShoesComponent;
  let fixture: ComponentFixture<BabyShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
