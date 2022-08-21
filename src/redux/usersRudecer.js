const initialState = {
    users: []
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            state = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: true}
                    return u
                })
            }
            break;
        case UNFOLLOW:
            state = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: false}
                    return u
                })
            }
            break;
        case SET_USERS:
            state = {...state, users: [...state.users, ...action.users]}
            break;
        default:
            break;
    }

    return state;
}