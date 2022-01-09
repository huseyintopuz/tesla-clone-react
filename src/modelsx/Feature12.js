import React from 'react'
import styled from 'styled-components'

const Feature12 = ({
    text,
    text2,
    text3,
    backgroundImageDesktop,
    backgroundImageMobile,
    backgroundImageDesktop2,
    backgroundImageMobile2,
    backgroundImageDesktop3,
    backgroundImageMobile3
    }) => {
    return (
        <Wrap>
            <Content2>
                <Info2>
                    <p>{text}</p>
                    <p>{text2}</p>
                </Info2>
                <ExteriorGridB bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile} />
            </Content2>
            <Content2>
                <ExteriorGridA bgImageDesktop={backgroundImageDesktop2} bgImageMobile={backgroundImageMobile2} />
                <Info2>
                    <p>Optimized Aerodynamics</p>
                    <p>{text3}</p>
                </Info2>
            </Content2>
            <Content2>
                <Info2>
                    <p>Refined Styling</p>
                    <p>Exterior design combines an iconic look with elegant proportions.</p>
                </Info2>
                <ExteriorGridC bgImageDesktop={backgroundImageDesktop3} bgImageMobile={backgroundImageMobile3} />
            </Content2>
        </Wrap>
    )
}

export default Feature12

const Wrap = styled.div`
background-color: black;
padding: 0 3rem;
`
const Content2 = styled.div`
display: flex;
justify-content: space-evenly;
`
const ExteriorGridB = styled.div`
width: 487px;
height: 280px;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}
`
const ExteriorGridA = styled.div`
width: 487px;
height: 280px;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}
`
const ExteriorGridC = styled.div`
width: 487px;
height: 280px;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}
`
const Info2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 383px;
height: 279px;
text-align: left;
p {
    color: white;
    line-height: 1.4;
    font-size: 16px;
}
p:first-child {
    padding-bottom: 1rem;
}
`