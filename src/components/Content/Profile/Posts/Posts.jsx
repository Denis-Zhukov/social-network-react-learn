import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";

export const Posts = ({posts, valueInput, onPostAdding, onUpdateNewPostText}) => {
    return (
        <div className={s.posts}>
            <h3 className={s.title}>Profile posts</h3>
            <textarea
                className={s.textArea} cols="30" rows="10"
                value={valueInput}
                onChange={(e) => onUpdateNewPostText(e.target.value)}
                maxLength={3000}
            ></textarea>
            <input
                className={s.submitBtn} type="submit" value="Submit"
                onClick={() => {
                    onPostAdding({
                        id: posts.reduce((acc, el) => el.id > acc ? el.id : acc, 0) + 1,
                        avatar: "/",
                        name: "Some",
                        text: valueInput
                    })
                    onUpdateNewPostText("");
                }}
            />

            <div className={s.profilePosts}>
                {posts?.length ? posts.map(p => <Post key={p.id} {...p} />) : <p>Постов нет</p>}
            </div>
        </div>
    );
};
