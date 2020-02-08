import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ContenidoInicio = () => {
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
    console.log(informacion.allDatoCmsPagina.nodes[0])
  return (
    <>
      <h1>Contenido Inicio</h1>
    </>
  )
}

export default ContenidoInicio
