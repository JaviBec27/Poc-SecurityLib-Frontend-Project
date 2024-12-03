import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C233Component } from './c2.3.3.component';

describe('C233Component', () => {
  let component: C233Component;
  let fixture: ComponentFixture<C233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C233Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
