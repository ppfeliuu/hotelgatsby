import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styeled from "@emotion/styled"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`;

const TextImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.75), rgba(34,49,63,.75));
    color: #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log(image)
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <div>
        <h1>Bienvenido al Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </div>
    </ImageBackground>
  )
}

export default ImagenHotel
