import React, { useState } from "react";
import s from "./Posts.module.css";
import { Post } from "./Post/Post";

const posts = [
    {avatar: "https://sun9-68.userapi.com/impf/e737Rl7oydjpx2a6KyMgIy3HsuGRNwNBtg4bhA/noGZ51JV7f8.jpg?size=706x706&quality=96&sign=9a0c40e34ad081f0c5ae408bedfb02c9&type=album", name: "Arthur Pirozhkov", text: ""},
    {avatar: "/", name: "Artem Mishchenko", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis metus interdum lorem porttitor, eu lacinia tortor elementum. Aenean eu metus turpis. Ut facilisis vel diam in consequat. Nullam finibus, nulla a sagittis maximus, metus orci placerat massa, in scelerisque enim diam id lacus. Sed sodales felis sit amet quam interdum, quis pretium dui euismod. In at mi a justo eleifend gravida. Morbi quis faucibus felis. Vivamus lorem orci, tempor at nibh sit amet, facilisis congue enim. Duis pharetra vestibulum facilisis. Nullam suscipit tellus euismod dui pretium consectetur. Suspendisse potenti. Mauris id iaculis velit, vel mattis lectus. Integer at vulputate."},
    {avatar: "/", name: "Ilnur Mustafin", text: ""},
];

export let Posts = () => {
    const [value, setValue] = useState("");

    return (
        <div className={s.posts}>
            <h3 className={s.title}>Profile posts</h3>
            <textarea
                className={s.textArea} cols="30" rows="10"
                value={value} onChange={(e) => setValue(e.target.value)}
                maxLength={3000}
            ></textarea>
            <input className={s.submitBtn} type="submit" value="Submit" />

            <div className={s.profilePosts}>
                {posts?.length ? posts.map(p => <Post avatar={p.avatar} name={p.name}>{p.text}</Post>) :
                    <p>Постов нет</p>}
            </div>
        </div>
    );
};