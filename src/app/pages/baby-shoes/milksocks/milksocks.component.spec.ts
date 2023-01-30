import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilksocksComponent } from './milksocks.component';

describe('MilksocksComponent', () => {
  let component: MilksocksComponent;
  let fixture: ComponentFixture<MilksocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilksocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilksocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
