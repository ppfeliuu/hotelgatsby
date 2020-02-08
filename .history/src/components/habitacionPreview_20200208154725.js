import React from 'react'
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62, 80, .85);
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;    
`;

const HabitacionPreview = ({habitacion}) => {

    const { contenido, imagen, titulo, slug } = habitacion;
    return (
        <div>
            <Image fluid={imagen.fluid} />
            <div>
                <h3>
                    {titulo}
                </h3>
                <p>{contenido}</p>
            </div>
        </div>
    )
}

export default HabitacionPreview
