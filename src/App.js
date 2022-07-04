import React from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Content/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

let App = () =>
    (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Navbar />

                <Switch>
                    <Route exact path="profile" element={<Profile />} />
                    <Route exact path="messages" element={<Profile />} />
                    <Route exact path="news" element={<Profile />} />
                    <Route exact path="music" element={<Profile />} />
                    <Route exact path="settings" element={<Profile />} />
                </Switch>

                <Footer />
            </div>
        </BrowserRouter>
    );


export default App;
