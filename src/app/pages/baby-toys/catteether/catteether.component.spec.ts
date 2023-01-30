import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatteetherComponent } from './catteether.component';

describe('CatteetherComponent', () => {
  let component: CatteetherComponent;
  let fixture: ComponentFixture<CatteetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatteetherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatteetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
