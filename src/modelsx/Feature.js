import React from 'react'
import styled from 'styled-components'

const Feature = ({ backgroundImageDesktop, backgroundImageMobile }) => {
    return (
        <Wrap>
            <Title>
                <h2>All-New Interior</h2>
            </Title>
            <Interior bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile} />
        </Wrap>
    )
}

export default Feature

const Wrap = styled.div`
width: 100vw;
`
const Title = styled.div`
background-color: #000000;
padding-bottom: 32px;

h2 {
    margin: 0;
    padding: 2rem 0 0.5rem;
    height: 76px;
    color: white;
    font-size: 28px;
    position: relative;
    animation-name: modelStitle;
    animation-duration: 2s;
}
`
const Interior = styled.div`
width: 1294px;
height: 617px;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
padding: 18.66px 0 0;
@media (max-width:900px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}
`
