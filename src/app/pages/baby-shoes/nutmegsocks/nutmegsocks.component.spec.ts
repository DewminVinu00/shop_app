import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutmegsocksComponent } from './nutmegsocks.component';

describe('NutmegsocksComponent', () => {
  let component: NutmegsocksComponent;
  let fixture: ComponentFixture<NutmegsocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutmegsocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutmegsocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
