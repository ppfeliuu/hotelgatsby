import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const useHabitaciones = () => {
    const informacion = useStaticQuery(graphql`
       query {
  allDatoCmsHabitacion {
    nodes {
      titulo
      id
      slug
      contenido
      imagen {
        fluid(maxWidth: 1200) {
          srcSet
        }
      }
    }
  }
}
    `;
    return (
        <div>
            
        </div>
    )
}

export default useHabitaciones
