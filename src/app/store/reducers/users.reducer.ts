import { USER_ACTION } from '../../constant/action.constant'


const initialState = {
    users: []
}

export function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case USER_ACTION.LOAD_USER:
            return {
                ...state,
                users: action.data
            }
        case USER_ACTION.CLEAR_USER:
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}
