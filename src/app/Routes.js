import React, { Fragment } from "react";
import universal from "react-universal-component";
import Head from "../Components/Head";
import { Route, Switch, Redirect } from "react-router";
import { RedirectWithStatus } from "../Components/RedirectStatus";
import "../assets/css/styles.css";

const UniversalComponent = process.env.BROWSER
  ? universal(props => import(`../Views/${props.page}`), {
      loading: () => <div>LOADING</div>,
      ignoreBabelRename: true,
      loadingTransition: true
    })
  : universal();

export default ({ staticContext, lang }) => (
  <Fragment>
    <Head />
    <Switch>
      <Route
        exact
        path="/:lang"
        render={routeProps => (
          <UniversalComponent page="Home" {...routeProps} />
        )}
      />
      <Route
        exact
        path="/:lang/about"
        render={routeProps => (
          <UniversalComponent page="About" {...routeProps} />
        )}
      />
      <RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
      <Route
        render={routeProps => (
          <UniversalComponent page="NotFound" {...routeProps} />
        )}
      />
    </Switch>
  </Fragment>
);
