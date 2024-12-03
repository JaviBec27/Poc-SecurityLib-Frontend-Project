import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTreePermissionsComponent } from './view-tree-permissions.component';

describe('ViewTreePermissionsComponent', () => {
  let component: ViewTreePermissionsComponent;
  let fixture: ComponentFixture<ViewTreePermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTreePermissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTreePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
