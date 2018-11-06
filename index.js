import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/index";
import TestApp from "./components/TestApp";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <TestApp />
    </Provider>,
    document.getElementById("root")
);