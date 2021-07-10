import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '../../pages/users/users.service';
import { USER_ACTION } from '../../constant/action.constant'

@Injectable()
export class UserEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType('[Movies Page] Load Movies'),
        mergeMap(() => this.userService.getUser()
            .pipe(
                map(users => ({ type: USER_ACTION.LOAD_USER, data: users.data })),
                catchError(() => of({ type: USER_ACTION.CLEAR_USER }))
            ))
    ));

    constructor(
        private actions$: Actions,
        private userService: UsersService
    ) { }
}