import React from "react"
import { grapgql } from "gatsby";
import Layout from "./layout";


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

const Habitaciones = ({data: { allDatoCmsHabitacion: { nodes }} }) => {
    
    const {titulo, contenido, imagen } = nodes[0];

  return (
    <Layout>

    </Layout>
    )
}

export default Habitaciones
