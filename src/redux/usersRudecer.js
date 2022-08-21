const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT_USERS = "SET-TOTAL-COUNT-USERS";

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_COUNT_USERS, count});

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
            state = {...state, users: [...action.users]}
            break;
        case SET_CURRENT_PAGE:
            state = {...state, currentPage: action.page}
            break;
        case SET_TOTAL_COUNT_USERS:
            state = {...state, totalUsersCount: action.count}
            break
        default:
            break;
    }

    return state;
}