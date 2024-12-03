import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C22Component } from './c2.2.component';

describe('C22Component', () => {
  let component: C22Component;
  let fixture: ComponentFixture<C22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
