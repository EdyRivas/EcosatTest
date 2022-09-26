import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpVarComponent } from './up-var.component';

describe('UpVarComponent', () => {
  let component: UpVarComponent;
  let fixture: ComponentFixture<UpVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
