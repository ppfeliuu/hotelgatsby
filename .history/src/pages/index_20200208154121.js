import React from "react"
import { css } from '@emotion/core';
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/useHabitaciones"
import HabitacionPreview from "../components/habitacionPreview";

const IndexPage = () => {
  const habitaciones = useHabitaciones();

  console.log(habitaciones);

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2 css={css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
      `}>Nuestras Habitaciones</h2>

    <ul>
      {habitaciones.map(habitacion =>(
        <HabitacionPreview habitacion={habitacion}/>
      ))}
    </ul>
    </Layout>
  )
}

export default IndexPage
