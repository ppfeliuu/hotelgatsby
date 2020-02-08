import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/useHabitaciones"

const IndexPage = () => {
  const habitaciones = useHabitaciones();

  console.log(habitaciones);
  
  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
    </Layout>
  )
}

export default IndexPage
