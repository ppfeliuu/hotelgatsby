import React from 'react'
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Linki)`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
`;

const Navegacion = () => {
    return (
        <Nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/nosotros'}>Nosotros</Link>
        </Nav>
    )
}

export default Navegacion
