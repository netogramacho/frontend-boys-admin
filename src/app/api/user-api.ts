import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable()
export class UserApi {
  httpOtions = {};

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${environment.apiUrl}user`);
  }

  getUserById(id: string) {
    return this.http.get(`${environment.apiUrl}user/${id}`);
  }
}
