export interface IUser {
    "user_id": number
    "username": string
    "password": string
    "fname": string
    "lname": string
    "tel": string
    "address": string
    "email": string
    "usergroup_id": number
    "createdAt": string
    "updatedAt": string
}

export interface IFunction {
    "function_id": number
    "function_name": string
    "sort": number
}

export interface IUsergroup {
    "usergroup_id": number
    "usergroup_name": string
    "functions": IFunction[]
}