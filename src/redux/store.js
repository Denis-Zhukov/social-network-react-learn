import header from "./../assets/header.jpg";
import avatar from "./../assets/logo.svg";
import {messagesReducer} from "./messagesReducer";
import {navbarReducer} from "./navbarReducer";
import {profileReducer} from "./profileReducer";


export let store = {
    _render: null,
    subscribe(observer) {
        this._render = observer;
    },

    _state: {
        navbar: {
            navItems: [
                {label: "Profile", to: "profile"},
                {label: "Messages", to: "messages"},
                {label: "News", to: "news"},
                {label: "Music", to: "music"},
                {label: "Settings", to: "settings"},
            ],
        },

        profile: {
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
        },

        messages: {
            dialogs: [
                {id: 12, name: "Denis Zhukov"},
                {id: 3203, name: "Artem Mishchenko"},
                {id: 320, name: "Anna Glushenok"},
            ],

            messages: [
                {id: 1, text: "Hi"},
            ],
            newMessageBody: "1"
        },
    },

    get state() {
        return this._state;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._render(this.state);
    },
};

export default store;
window.store = store;