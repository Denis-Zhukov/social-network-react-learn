const initialState = {
    users: [{
        id: 1, fullName: "Denis", followed: true, status: "I'm fine", location: {city: 'Homel', country: 'Belarus'}
    }, {
        id: 2, fullName: "Arthur", followed: true, status: "I'm not fine", location: {city: 'Moscow', country: 'Russia'}
    }, {id: 3, fullName: "Pasha", followed: false, status: "I'm bad", location: {city: 'Odessa', country: 'Ukraine'}}, {
        id: 4, fullName: "Artem", followed: false, status: "I'm no bad", location: {city: 'Washington', country: 'USA'}
    }]

}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: UNFOLLOW, users})

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
            state = {...state, users: {...state.users, ...action.users}}
            break;
        default:
            break;
    }

    return state;
}