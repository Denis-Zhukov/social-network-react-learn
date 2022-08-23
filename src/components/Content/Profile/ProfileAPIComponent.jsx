import React, {useEffect, useState} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {useParams} from "react-router-dom";

export const ProfileAPIComponent = (props) => {
    let [id, setId] = useState(useParams("id").id);
    useEffect(() => {
        (async () => {
            debugger
            if (!id) {
                const response = await axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",
                    {withCredentials: true});

                setId(response.data?.data?.id);
            }
            const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            props.setProfile(response.data);
        })();
    }, [id, setId, props])


    return <Profile {...props}/>

}

