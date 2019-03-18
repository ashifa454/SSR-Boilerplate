import React, { Fragment } from "react";
import Head from "../../Components/Head";
import { Status } from "../../Components/Status";
import { Container, Readable } from "../../Components/Layout";
import styles from "./NotFound.css";

function NotFound() {
  return (
    <Fragment>
      <Head title="React SSR Boilerplate • Not Found" />
      <Status code={404} />
      <Container>
        <Readable>
          <h1>Not Found</h1>
          <p>404 Error - Page not found.</p>
        </Readable>
      </Container>
    </Fragment>
  );
}

export default NotFound;
