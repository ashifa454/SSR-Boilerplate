import React, { Fragment } from "react";
import universal from "react-universal-component";
import Head from "../Components/Head";
import { Route, Switch, Redirect } from "react-router";
import { RedirectWithStatus } from "../Components/RedirectStatus";
import { Loading } from "../Components/Layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../assets/css/styles.css";

const UniversalComponent = universal(
  props => import(`../Views/${props.page}`),
  {
    loading: () => {
      if (process.env.BROWSER) {
        NProgress.start();
        return <></>;
      }
    },
    onLoad: () => {
      if (process.env.BROWSER) {
        NProgress.done();
      }
    },
    ignoreBabelRename: true,
    loadingTransition: true
  }
);

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
