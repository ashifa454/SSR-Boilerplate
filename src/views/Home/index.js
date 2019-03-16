import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import reducer from "./reducer";
import saga from "./saga";
import Head from "../../Components/Head";

class Home extends Component {
  render() {
    const { lang } = this.props.match.params;

    return (
      <Fragment>
        <Head />
        HELLO WORLD
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
// const withReducer = injectReducer({ key: "home", reducer });
const withSaga = injectSaga({ key: "home", saga });
export default compose(
  // withReducer,
  withSaga,
  withConnect
)(Home);
