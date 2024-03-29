const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT_USERS = "SET-TOTAL-COUNT-USERS";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_COUNT_USERS, count});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

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
        case TOGGLE_IS_LOADING:
            state = {...state, isLoading: action.isLoading}
        default:
            break;
    }

    return state;
}