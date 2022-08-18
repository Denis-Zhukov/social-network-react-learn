import header from "../assets/header.jpg";
import avatar from "../assets/logo.svg";

const ADD_POST = "ADD-POST";
const SET_VALUE_INPUT = "SET-VALUE-INPUT";

export const changeInputActionCreator = (content) => {
    return {type: SET_VALUE_INPUT, text: content};
}

export const addPostActionCreator = ({id, avatar, name, text}) => {
    return {
        type: ADD_POST,
        post: {id, avatar, name, text}
    };
}

const initialState = {
    header: header,
    avatar: avatar,
    info: {
        fullname: "Denis Zhukov",
        dateOfBirth: "21 June",
        education: "GSTU",
        city: "Mozyr",
        webSite: "https://github.com/HachikoR",
    },

    valueInput: "",

    posts: [
        {
            id: 1,
            avatar: "https://sun9-68.userapi.com/impf/e737Rl7oydjpx2a6KyMgIy3HsuGRNwNBtg4bhA/noGZ51JV7f8.jpg?size=706x706&quality=96&sign=9a0c40e34ad081f0c5ae408bedfb02c9&type=album",
            name: "Arthur Pirozhkov",
            text: "Hi!"
        },
        {
            id: 2,
            avatar: "/",
            name: "Artem Mishchenko",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis metus interdum lorem porttitor, eu lacinia tortor elementum. Aenean eu metus turpis. Ut facilisis vel diam in consequat. Nullam finibus, nulla a sagittis maximus, metus orci placerat massa, in scelerisque enim diam id lacus. Sed sodales felis sit amet quam interdum, quis pretium dui euismod. In at mi a justo eleifend gravida. Morbi quis faucibus felis. Vivamus lorem orci, tempor at nibh sit amet, facilisis congue enim. Duis pharetra vestibulum facilisis. Nullam suscipit tellus euismod dui pretium consectetur. Suspendisse potenti. Mauris id iaculis velit, vel mattis lectus. Integer at vulputate."
        },
        {id: 3, avatar: "/", name: "Ilnur Mustafin", text: "What's up!"},
    ],
}

export const profileReducer = (state = initialState, action) => {
    const addPost = (newPost) => {
        state.posts.push(newPost);
    }

    const setValueInput = (value) => {
        state.valueInput = value;
    }

    switch (action.type) {
        case ADD_POST:
            addPost(action.post);
            break;
        case SET_VALUE_INPUT:
            setValueInput(action.text);
            break;
        default:
            break;
    }

    return state;
}