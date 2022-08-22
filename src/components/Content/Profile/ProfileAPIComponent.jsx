import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {useParams} from "react-router-dom";

export const ProfileAPIComponent = (props) => {
    let {id} = useParams("id");
    useEffect(() => {
        (async () => {
            id ??= 25565;
            const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            props.setProfile(response.data);
        })();
    }, [id])


    return <Profile {...props}/>

}

