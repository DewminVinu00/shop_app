import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherpablanketComponent } from './sherpablanket.component';

describe('SherpablanketComponent', () => {
  let component: SherpablanketComponent;
  let fixture: ComponentFixture<SherpablanketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SherpablanketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SherpablanketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
