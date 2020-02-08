import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image';

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

    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];
  return (
    <>
      <h1>{titulo}</h1>

      <div>
          <p>{contenido}</p>
          <img src={imagen.fluid.src} />
      </div>
    </>
  )
}

export default ContenidoInicio
