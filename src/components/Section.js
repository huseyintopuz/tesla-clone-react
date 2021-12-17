import React from 'react'
import styled from 'styled-components'
// import Fade from 'react-reveal/Fade';
// import down from './down.png'


const Section = ({ title, order, touchless, backgroundImageDesktop, backgroundImageMobile, leftButton, rightButton }) => {

    return (
        <Wrap bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile}>
            <ItemText>
                {/* <Fade bottom> */}
                <Title>{title}</Title>
                <Order>
                    <Online>{order}</Online>
                    <Touchless>{touchless}</Touchless>
                </Order>
                {/* </Fade> */}

            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftButton}</LeftButton>
                    {rightButton &&
                        <RightButton>{rightButton}</RightButton>
                    }
                </ButtonGroup>
                <Sign>
                    {/* <img src={down} alt="" /> */}
                </Sign>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
@media (max-width: 600px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}
`
const ItemText = styled.div`
margin-top: 6.5rem;
`
const Title = styled.div`
font-size: 2.5rem;
font-weight: 600;
letter-spacing: 3px;
color: #393C41;
position: relative;
animation-name: title;
animation-duration: 2s;  
animation-fill-mode: forwards;
`
const Order = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 0.5rem;
animation-name: order;
animation-duration: 2s;

`
const Online = styled.div`
color: #6A6D73;
`
const Touchless = styled.div`
margin-left: 0.4rem;
text-decoration: underline;
color: #6A6D73;
&:hover {
    font-weight: 600;
}
cursor: pointer;
`
const Buttons = styled.div`
margin-top: 55vh;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px;
@media (max-width: 768px) {
    margin-top: 40vh
}
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 0.5rem;
@media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
}
`
const LeftButton = styled.button`
background-color: #323237;
color: #F9F9F9;
border-radius: 9999px;
padding: 14px 70px;
border: none;
opacity: 0.95;
font-weight: bold;
cursor: pointer;

`
const RightButton = styled.button`
background-color: #DDDAD9;
color: #323237;
margin-left: 20px;
border-radius: 9999px;
padding: 13px 50px;
border: none;
opacity: 0.95;
font-weight: bold;
cursor: pointer;
@media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 1rem;
    
}
`
const Sign = styled.div`

// -ms-transform: rotate(90deg); /* IE 9 */
// transform: rotate(90deg);
// animation: animateDown infinite 1.5s;
// overflow-x: hidden;
`

