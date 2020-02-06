import React from "react"
import Header from "./header"
import Helmet from "react-helmet"

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
