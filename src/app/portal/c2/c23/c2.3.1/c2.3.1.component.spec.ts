import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C231Component } from './c2.3.1.component';

describe('C231Component', () => {
  let component: C231Component;
  let fixture: ComponentFixture<C231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C231Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
