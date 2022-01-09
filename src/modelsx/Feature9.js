import React from 'react'
import styled from 'styled-components'

const Feature9 = ( {text, drag, text2, height, backgroundImageDesktop, backgroundImageMobile} ) => {
    return (
        <Wrap>
            <MsExterior heightSet={height} bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile}>
                    <Box2>
                        <div>
                            <p>{text}</p>
                        </div>
                        <Drag>
                            <div>
                                <span>{drag}</span>
                                <img src="../images/Cd-V6.webp" alt="Cd-v6"></img>
                            </div>
                            <p>{text2}</p>
                        </Drag>                        
                        <div>
                            <p>Refined exterior styling</p>
                        </div>
                    </Box2>
                </MsExterior>
        </Wrap>
    )
}

export default Feature9

const Wrap = styled.div`
`
const MsExterior = styled.div`
// height: 808.75px;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 1294px;
height: ${props => props.heightSet };
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: 50% 59%;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}
`
const Box2 = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-evenly;
width: 1294px;
height: 156px;
padding: 25px 0px 55px 0;
div p {
    color: white;
    font-size: 14px;
}
`
const Drag = styled.div`
div {
    display: flex;
    align-items: center;
    height: 28px;
}
div span:first-child {
    padding-right: 0.6rem;
    font-size: 1.8rem;
    font-weight: bold;
}
div img {
    width: 80px;
}
p {
    padding-top: 6px;
    color: white;
    font-size: 14px;
}
div span {
    color: white;
}
`