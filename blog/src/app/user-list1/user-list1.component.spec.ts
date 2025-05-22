import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserList1Component } from './user-list1.component';

describe('UserList1Component', () => {
  let component: UserList1Component;
  let fixture: ComponentFixture<UserList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserList1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
