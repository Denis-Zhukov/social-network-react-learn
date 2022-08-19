import React from "react";
import {changeInputActionCreator, addPostActionCreator} from "../../../../redux/profileReducer";
import {Posts} from "./Posts";
import StoreContext from "../../../../StoreContext";

export const PostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    const dispatch = store.dispatch;
                    const state = store.getState().profile;
                    const updateNewPostText = (text) => dispatch(changeInputActionCreator(text));
                    const addPost = (post) => dispatch(addPostActionCreator(post));

                    return <Posts posts={state.posts} valueInput={state.valueInput}
                                  onUpdateNewPostText={updateNewPostText}
                                  onPostAdding={addPost}/>
                }
            }
        </StoreContext.Consumer>
    );
};
