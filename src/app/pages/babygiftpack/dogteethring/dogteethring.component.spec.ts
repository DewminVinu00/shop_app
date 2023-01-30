import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogteethringComponent } from './dogteethring.component';

describe('DogteethringComponent', () => {
  let component: DogteethringComponent;
  let fixture: ComponentFixture<DogteethringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogteethringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogteethringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
