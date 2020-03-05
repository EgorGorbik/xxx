import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login";
import { Provider } from 'react-redux';
import {store} from "./redux/store/configStore";
import {BrowserRouter} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Initialization from "./components/Initialization";
const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter history={browserHistory}>
                <Initialization/>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
