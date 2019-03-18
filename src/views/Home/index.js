import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import reducer from "./reducer";
import { Link } from "react-router-dom";
import saga from "./saga";
import Head from "../../Components/Head";
import { Loading } from "../../Components/Layout";
import "./style.scss";

class Home extends Component {
  render() {
    const { lang } = this.props.match.params;

    return (
      <Fragment>
        <Head />
        <div className="demo">HELLO WORLD</div>
        <Link to="/en/about">About</Link>
      </Fragment>
    );
  }
}
export function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}
const mapStateToProps = createStructuredSelector({});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: "home", reducer });
const withSaga = injectSaga({ key: "home", saga });
export default compose(
  withReducer,
  withSaga,
  withConnect
)(Home);
