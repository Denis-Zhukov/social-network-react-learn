import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {store} from "./redux/redux-store";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const render = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
    );
};

store.subscribe(render);
render(store.getState());