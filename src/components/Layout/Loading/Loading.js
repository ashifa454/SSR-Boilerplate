import React from "react";
import NProgress from "nprogress";
import styles from "./Loading.css";

class Loading extends React.Component {
  componentWillMount() {
    // NProgress.start();
  }
  componentWillUnmount() {
    // NProgress.done();
    // NProgress.remove();
  }
  render() {
    return (
      <div className={styles.loading}>
        <div className={styles.inner}>
          <div className={styles.spinner}>
            <div className={styles.bubble1} />
            <div className={styles.bubble2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
