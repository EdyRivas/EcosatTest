import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsChasrtComponent } from './stats-chasrt.component';

describe('StatsChasrtComponent', () => {
  let component: StatsChasrtComponent;
  let fixture: ComponentFixture<StatsChasrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsChasrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsChasrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
