import React from "react";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Content/Profile/Profile";
import {Messages} from "./components/Content/Messages/Messages";
import {Footer} from "./components/Footer/Footer";
import "./App.css";

import {Routes as Switch, Route} from "react-router-dom";

let App = ({navbar, profile, messages, dispatch}) => {
    debugger;
    return (
        <div className="app">
            <Header/>
            <Navbar {...navbar} />

            <Switch>
                <Route path="profile" element={<Profile {...profile} dispatch={dispatch} className="content"/>}/>
                <Route path={"messages/*"} element={<Messages {...messages} dispatch={dispatch} className="content"/>}/>
                <Route path="news" element={<Profile {...profile} className="content"/>}/>
                <Route path="music" element={<Profile {...profile} className="content"/>}/>
                <Route path="settings" element={<Profile {...profile} className="content"/>}/>
            </Switch>

            <Footer/>
        </div>
    )
};


export default App;
