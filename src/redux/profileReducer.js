const ADD_POST = "ADD-POST";
const SET_VALUE_INPUT = "SET-VALUE-INPUT";

export const profileReducer = (state, action) => {
    const addPost = (newPost) => {
        state.posts.push(newPost);
    }

    const setValueInput=(value)=> {
        state.valueInput = value;
    }

    switch (action.type) {
        case ADD_POST:
            addPost(action.post);
            break;
        case SET_VALUE_INPUT:
            setValueInput(action.text);
            break;
        default: break;
    }

    return state;
}