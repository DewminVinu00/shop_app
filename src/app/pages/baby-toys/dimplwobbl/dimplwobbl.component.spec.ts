import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimplwobblComponent } from './dimplwobbl.component';

describe('DimplwobblComponent', () => {
  let component: DimplwobblComponent;
  let fixture: ComponentFixture<DimplwobblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimplwobblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimplwobblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
