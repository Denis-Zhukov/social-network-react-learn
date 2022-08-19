import {Posts} from "./Posts";
import {changeInputActionCreator, addPostActionCreator} from "../../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    posts: state.profile.posts,
    valueInput: state.profile.valueInput
})

const mapDispatchToProps = dispatch => ({
    onUpdateNewPostText: (text) => dispatch(changeInputActionCreator(text)),
    onPostAdding: (post) => dispatch(addPostActionCreator(post))
});

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
