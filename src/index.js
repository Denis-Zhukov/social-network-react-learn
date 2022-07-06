import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/state";
import "./index.css";

import state from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const render = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App dispatch={store.dispatch.bind(store)} {...store.state} />
            </React.StrictMode>
        </BrowserRouter>,
    );
};

store.subscribe(render);
render(state);