import "@babel/polyfill";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import configureStore from "../../configureStore";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
