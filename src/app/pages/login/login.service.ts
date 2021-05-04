import { Injectable } from '@angular/core';

const MOC_USER = [
  {
    username: 'ice',
    password: '123456',
    fname: 'todsaporn',
    lname: 'sangpook',
    tel: '0836884233',
  },
];

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  signInService(username: string, password: string) {
    const userProfile = MOC_USER.filter(
      (user) => user.username === username && user.password === password
    );

    if (userProfile.length) {
      return userProfile[0];
    }

    return;
  }
}
