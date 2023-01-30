import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortersComponent } from './comforters.component';

describe('ComfortersComponent', () => {
  let component: ComfortersComponent;
  let fixture: ComponentFixture<ComfortersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfortersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfortersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
