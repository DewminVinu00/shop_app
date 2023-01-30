import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OatsocksComponent } from './oatsocks.component';

describe('OatsocksComponent', () => {
  let component: OatsocksComponent;
  let fixture: ComponentFixture<OatsocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OatsocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OatsocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
