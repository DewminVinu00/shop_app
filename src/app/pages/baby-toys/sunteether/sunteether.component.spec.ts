import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunteetherComponent } from './sunteether.component';

describe('SunteetherComponent', () => {
  let component: SunteetherComponent;
  let fixture: ComponentFixture<SunteetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunteetherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunteetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
