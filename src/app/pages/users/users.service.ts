import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUsergroup } from './users.interface'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser() {
    const url = 'https://node-type-api.herokuapp.com/api/users'
    return this.http.get<{ data: IUser[] }>(url)
  }

  getUserGroup() {
    const url = 'https://node-type-api.herokuapp.com/api/usergroups'
    return this.http.get<{ data: IUsergroup[] }>(url)
  }
}
