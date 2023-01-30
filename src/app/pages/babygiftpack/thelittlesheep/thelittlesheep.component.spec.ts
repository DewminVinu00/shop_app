import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThelittlesheepComponent } from './thelittlesheep.component';

describe('ThelittlesheepComponent', () => {
  let component: ThelittlesheepComponent;
  let fixture: ComponentFixture<ThelittlesheepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThelittlesheepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThelittlesheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
