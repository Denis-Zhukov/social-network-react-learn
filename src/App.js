import React from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Content/Profile/Profile";
import { Messages } from "./components/Content/Messages/Messages";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

import { Routes as Switch, Route } from "react-router-dom";

let App = ({navbar, profile, messages, addPost, setValueInput}) =>
    (
        <div className="app">
            <Header />
            <Navbar {...navbar} />

            <Switch>
                <Route path="profile" element={<Profile {...profile} addPost={addPost} setValueInput ={setValueInput} className="content" />} />
                <Route path={"messages/*"} element={<Messages {...messages} className="content" />} />
                <Route path="news" element={<Profile {...profile} addPost={addPost} setInputValue ={setValueInput} className="content" />} />
                <Route path="music" element={<Profile {...profile} addPost={addPost} setInputValue ={setValueInput} className="content" />} />
                <Route path="settings" element={<Profile {...profile} addPost={addPost} setInputValue ={setValueInput} className="content" />} />
            </Switch>

            <Footer />
        </div>
    );


export default App;
