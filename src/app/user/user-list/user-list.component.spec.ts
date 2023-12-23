import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService : UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      {id: 1, name:"Jone Doe"},
      {id: 2, name: "Maeia Doe"}
    ]));
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should retrieve users from the UserService on init', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  })
});
