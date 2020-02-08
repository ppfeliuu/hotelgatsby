import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ContenidoNostros = () => {

    const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid( maxWidth: 1200 ){
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  console.log(resultado.allDatoCmsPagina.nodes[0])

  const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

    return (
        <div>
            
        </div>
    )
}

export default ContenidoNostros
