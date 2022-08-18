import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {changeInputActionCreator, addPostActionCreator} from "../../../../redux/profileReducer";

export const Posts = ({posts, valueInput, dispatch}) => {
    return (
        <div className={s.posts}>
            <h3 className={s.title}>Profile posts</h3>
            <textarea
                className={s.textArea} cols="30" rows="10"
                value={valueInput}
                onChange={(e) => dispatch(changeInputActionCreator(e.currentTarget.value))}
                maxLength={3000}
            ></textarea>
            <input
                className={s.submitBtn} type="submit" value="Submit"
                onClick={() => {
                    dispatch(addPostActionCreator({
                        id: posts.reduce((acc, el) => el.id > acc ? el.id : acc, 0) + 1,
                        avatar: "/",
                        name: "Some",
                        text: valueInput
                    }));
                    dispatch(changeInputActionCreator(""));
                }}
            />

            <div className={s.profilePosts}>
                {posts?.length ? posts.map(p => <Post key={p.id} {...p} />) : <p>Постов нет</p>}
            </div>
        </div>
    );
};
