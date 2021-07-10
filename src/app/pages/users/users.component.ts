import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'
import { IUsergroup, IUser } from './users.interface'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usergroupList: IUsergroup[] = []

  users$: Observable<IUser[]> = this.store.select(state => state.users);

  constructor(public usersService: UsersService, private store: Store<{ users: IUser[] }>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Movies Page] Load Movies' })
    // this.getUser()
    // this.getUserGroup()
  }

  // getUser() {
  //   this.usersService.getUser().subscribe((data) => {
  //     console.log('data user => ', data);
  //   })
  // }

  // getUserGroup() {
  //   this.usersService.getUserGroup().subscribe((data) => {
  //     console.log('data usergroup => ', data);
  //     this.usergroupList = data.data
  //   }, err => {
  //     console.log('err => ', err);
  //   })
  // }

  onClickShow() {
    console.log('show', this.users$);
  }
}
