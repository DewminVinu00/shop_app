import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyBlanketsComponent } from './baby-blankets.component';

describe('BabyBlanketsComponent', () => {
  let component: BabyBlanketsComponent;
  let fixture: ComponentFixture<BabyBlanketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyBlanketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyBlanketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
