import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducer/index";
import TestApp from "./components/TestApp";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <TestApp />
    </Provider>,
    document.getElementById("root")
);