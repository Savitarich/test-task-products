import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootView = document.getElementById("root");

if (rootView) {
    ReactDOM.render(
        <React.StrictMode>
            <Router basename='/test-task-products'>
                <App />
            </Router>
        </React.StrictMode>,
        rootView
    );
}
