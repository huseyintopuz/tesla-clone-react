import React from 'react'
import styled from 'styled-components'

const Feature7 = ( {backgroundImageDesktop, backgroundImageMobile} )  => {
    return (
        <Wrap>
            <Space />
            <Performance bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile}/>
            <Space />
        </Wrap>
    )
}

export default Feature7

const Wrap = styled.div`
display: flex;
`
const Space = styled.div`
    width: 114px;
    height: 500px;
    background-color: #F5F5F5;

`
const Performance = styled.div`
width: 1066.66px;
height: 500px;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}
`