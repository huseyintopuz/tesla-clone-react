import React from 'react'
import styled from 'styled-components'
import HeaderCars from '../components/HeaderCars'
import { Chat } from '../icons/Icon'

const SectionSX = ({ title, range, acceleration, speed, type, topSpeed, backgroundImageDesktop, backgroundImageMobile }) => {
    return (
        <Wrap bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile}>
            <HeaderCars />
            <ItemText>
                <Title>{title}</Title>
                <Plaid>Plaid</Plaid>
            </ItemText>
            <Infos>
                <Range>
                    <Number>
                        <span>{range}</span>
                        <span>mi</span>
                    </Number>
                    <p>Range (EPA est.)</p>
                </Range>
                <Acceleration>
                    <Number>
                        <span>{acceleration}</span>
                        <span>s</span>
                    </Number>
                    <p>0-60 mph*</p>
                </Acceleration>
                <TopSpeed>
                    <Number>
                        <span>{speed}</span>
                        <span>{type}</span>
                    </Number>
                    <p>{topSpeed}</p>
                </TopSpeed>
                <PeakOrder>
                    <PeakPower>
                        <Number>
                            <span>1020</span>
                            <span>hp</span>
                        </Number>
                        <p>Peak Power</p>
                    </PeakPower>
                </PeakOrder>
                <Order>ORDER NOW</Order>
                <Button>
                    <ChatButton>
                        <Chat />
                    </ChatButton>
                </Button>
            </Infos>

        </Wrap>

    )
}

export default SectionSX

const Wrap = styled.div`
z-index: 1;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100vw;
height: 100vh;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-repeat: no-repeat;
background-position: center;
@media (max-width:900px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`}
}
`
const ItemText = styled.div`
margin-top: -20rem;
`
const Title = styled.div`
text-align: center;
font-size: 2.5rem;
font-weight: 600;
letter-spacing: 3px;
color: #393C41;
position: relative;
animation-name: title;
animation-duration: 2s;
`
const Plaid = styled.div`
margin-top: 0.5rem;
font-size: 17px;
`
const Infos = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 1.2rem 14rem;

`
const Range = styled.div`
padding: 0 20px;
p {
    color: white;
    font-size:12px;
}
`
const Number = styled.div`
margin-bottom: 0.5rem;
span {
    color: white;
}
span:first-child {
    letter-spacing: 1px;
    font-size: 30px;
    font-weight: 600;
    margin-right: 4px;
}
span:last-child {
    font-size: 26px;
    font-weight: 600;
}
`
const Acceleration = styled.div`
padding: 0 20px;
p {
    color: white;,
    font-size:12px;
}
`
const TopSpeed = styled.div`
padding: 0 20px;
p { 
    color: white;
    font-size:12px;
}
`
const PeakOrder = styled.div`
padding: 0 20px;
display: flex;
`
const PeakPower = styled.div`
p {
    color: white;
    font-size:12px;
}
@media (max-width: 840px) {
    display: none;
}
`
const Order = styled.button`
font-weight: bold;
margin-left: 2rem;
color: #F5F5F5;
border: 3px solid #F5F5F5;
border-radius: 20px;
background-color: transparent;
height: 50%;
padding: 0.5rem 2.3rem;
cursor: pointer;
&:hover {
    background-color: #FFFFFF;
    color: #2B2B2B;
    font-weight: bold;
}
`
const Button = styled.div`
z-index: 10;
position: fixed;
right: 3rem;
bottom: 5rem;
width: 52px;
height: 52px;
background-color: #ffffff;
border-radius: 9999px;
`
const ChatButton = styled.svg`
margin: 13px 11px;
width: 32px;
height: 32px;



`