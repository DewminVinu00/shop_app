import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottonblanketComponent } from './cottonblanket.component';

describe('CottonblanketComponent', () => {
  let component: CottonblanketComponent;
  let fixture: ComponentFixture<CottonblanketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottonblanketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CottonblanketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
