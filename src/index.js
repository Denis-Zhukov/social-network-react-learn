import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/redux-store";
import "./index.css";

import state from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const render = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App dispatch={store.dispatch.bind(store)} {...store.getState()} />
            </React.StrictMode>
        </BrowserRouter>,
    );
};

store.subscribe(render);
render(state);