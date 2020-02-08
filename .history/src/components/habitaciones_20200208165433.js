import React from "react"
import { grapgql } from "gatsby"
import Layout from "./layout"
import Image from "gatsby-image"
import { css } from "@emotion/core"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const Habitaciones = ({
  data: {
    allDatoCmsHabitacion: { nodes },
  },
}) => {
  const { titulo, contenido, imagen } = nodes[0]

  return (
    <Layout>
      <main css={css`
        margin: 0 auto;
        max-width: 1200px;
        width: 95%;        
      `}>
        <h1 css={css`
            text-align: center;
            margin-top: 4rem;
        `}>{titulo}</h1>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </main>
    </Layout>
  )
}

export default Habitaciones
