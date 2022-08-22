import React from "react";
import {Profile} from "./Profile";
import axios from "axios";

export class ProfileAPIComponent extends React.Component {
    getProfile = async (id) => {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
        this.props.setProfile(response.data);
    }

    componentDidMount() {
        this.getProfile()
    }

    render() {
        return <Profile {...this.props}/>
    }
}

