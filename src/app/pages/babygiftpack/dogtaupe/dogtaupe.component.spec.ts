import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogtaupeComponent } from './dogtaupe.component';

describe('DogtaupeComponent', () => {
  let component: DogtaupeComponent;
  let fixture: ComponentFixture<DogtaupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogtaupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogtaupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
