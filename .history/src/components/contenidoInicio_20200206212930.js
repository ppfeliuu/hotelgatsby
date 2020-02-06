import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const contenidoInicio = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <h1>Contenido Inicio</h1>
    </>
  )
}

export default contenidoInicio
