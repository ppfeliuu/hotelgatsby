import React from 'react';
import { css } from '@emotion/core';

const Header = () => {
    return (
        <div>
            <header css={css`
                background-color: #333;
                padding: 1rem;
            `}>
                <div css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}>
                    <h1>Hotel Gatsby</h1>

                    <p>Nav here</p>
                </div>
            </header>
        </div>
    )
}

export default Header
