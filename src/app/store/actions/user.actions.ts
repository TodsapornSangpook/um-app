import { createAction } from '@ngrx/store';
import { USER_ACTION } from '../../constant/action.constant'

export const clearUsers = createAction(USER_ACTION.CLEAR_USER);