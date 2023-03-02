import React from 'react';
import Styled from 'styled-components';

const Contenu = Styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    background: url(images/${props => props.imageUrl}) rgba(0, 0, 0, ${props => props.opacite});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;

    /* smartphone */
    height: 111px;
    font-size: 24px;
    justify-content: flex-start;
    border-radius: 10px;
    line-height: 100%;
    margin-top: 10px;
    padding: 0 10px;

    /* desktop */
    @media (min-width: 768px) {
        height: 223px;
        font-size: 48px;
        justify-content: center;
        border-radius: 25px;
        line-height: 142.6%;
        margin-top: 40px;
        padding: 0;
    }
`;

function Banner({imageUrl, opacite, children}) {
    return (
        <Contenu imageUrl={imageUrl} opacite={opacite}>{children}</Contenu>
    )
}

export default Banner;