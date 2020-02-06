import React from "react"
import { css, Global } from '@emotion/core';
import Helmet from "react-helmet"
import Header from "./header"

const Layout = props => {
  return (
    <>
        <Global
            styles={css`
                body {
                    background-color: red;
                }
            `}
        />
      <Helmet>
        <title>Gatsby Hotel</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />

      </Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
