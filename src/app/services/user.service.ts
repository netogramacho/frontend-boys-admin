import { Injectable } from '@angular/core';
import { UserApi } from '../api/user-api';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject$ = new BehaviorSubject<any[]>([]);

  constructor(private userApi: UserApi) {}

  getUsers() {
    this.userApi.getUsers().subscribe((users: any) => {
      this.usersSubject$.next(users);
    });
  }

  get users$() {
    return this.usersSubject$.asObservable();
  }

  getUserById(id: string): Observable<any> {
    return this.userApi.getUserById(id);
  }
}
