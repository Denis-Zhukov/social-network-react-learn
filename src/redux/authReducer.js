const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    userId: null,
    "login": null,
    "email": null
};

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, user: {userId, email, login}})

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.user};
        default:
            break;
    }

    return state
}