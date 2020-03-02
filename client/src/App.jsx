import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import { Provider } from 'react-redux';
import {store} from "./redux/store/configStore";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Login/>
        </Provider>
    );
  }
}

export default App;
