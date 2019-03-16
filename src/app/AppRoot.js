import "@babel/polyfill";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import configureStore from "../../configureStore";
import ScrollToTop from "../Components/ScrollToTop";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const isEn = location.pathname.substr(1, 2) == "en" && "en";
    const isDe = location.pathname.substr(1, 2) == "de" && "de";
    const store = configureStore();
    const currentLang = isEn || isDe || "en";
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <Routes lang={navigator && currentLang} />
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}
