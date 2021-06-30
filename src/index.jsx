import './index.less'
import React from 'react'
import ReactDOM from 'react-dom';
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./components/redux";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)