import React from "react";
import s from "./Posts.module.css";
import { Post } from "./Post/Post";

export let Posts = ({posts, valueInput, addPost, setValueInput}) => {
    return (
        <div className={s.posts}>
            <h3 className={s.title}>Profile posts</h3>
            <textarea
                className={s.textArea} cols="30" rows="10"
                value={valueInput}
                onChange={(e) => setValueInput(e.currentTarget.value)}
                maxLength={3000}
            ></textarea>
            <input
                className={s.submitBtn} type="submit" value="Submit"
                onClick={() => {
                    addPost({
                        id: posts.reduce((acc, el) => el.id > acc ? el.id : acc, 0) + 1,
                        avatar: "/",
                        name: "Ilnur Mustafin",
                        text: valueInput,
                    });
                    setValueInput("");
                }}
            />

            <div className={s.profilePosts}>
                {posts?.length ? posts.map(p => <Post key={p.id} {...p} />) : <p>Постов нет</p>}
            </div>
        </div>
    );
};
