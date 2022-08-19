import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import "./App.css";

import {Routes as Switch, Route} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {ProfileContainer} from "./components/Content/Profile/ProfileContainer";
import {MessagesContainer} from "./components/Content/Messages/MessagesContainer";

let App = () => {
    return (
        <div className="app">
            <Header/>
            <NavbarContainer/>

            <Switch>
                <Route path="profile" element={<ProfileContainer className="content"/>}/>
                <Route path={"messages/*"} element={<MessagesContainer className="content"/>}/>
                <Route path="news" element={<ProfileContainer className="content"/>}/>
                <Route path="music" element={<ProfileContainer className="content"/>}/>
                <Route path="settings" element={<ProfileContainer className="content"/>}/>
            </Switch>

            <Footer/>
        </div>
    )
};


export default App;
