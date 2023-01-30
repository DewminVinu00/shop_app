import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvacadosocksComponent } from './avacadosocks.component';

describe('AvacadosocksComponent', () => {
  let component: AvacadosocksComponent;
  let fixture: ComponentFixture<AvacadosocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvacadosocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvacadosocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
