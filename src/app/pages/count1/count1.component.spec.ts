import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Count1Component } from './count1.component';

describe('Count1Component', () => {
  let component: Count1Component;
  let fixture: ComponentFixture<Count1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Count1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Count1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
