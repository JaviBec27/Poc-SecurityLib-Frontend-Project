import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C232Component } from './c2.3.2.component';

describe('C232Component', () => {
  let component: C232Component;
  let fixture: ComponentFixture<C232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C232Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
