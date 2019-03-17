import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../assets/img/favicon.ico";

const isProd = process.env.NODE_ENV === "production";

function Head({
  title = "React Boilerplate SSR",
  description = "SSR Made Simple, Use Redux, Saga, Reselect",
  image = "https://miro.medium.com/max/480/1*ypTuZbQNEV1oGkAfn85AUA.png",
  children
}) {
  return (
    <Helmet encodeSpecialCharacters={true}>
      <meta http-equiv="" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="icon" sizes="192x192" href={image} />
      <link rel="apple-touch-icon-precomposed" href={image} />
      {children && children}
      <title>{title}</title>
    </Helmet>
  );
}

export default Head;
