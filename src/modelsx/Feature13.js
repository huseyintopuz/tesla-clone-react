import React from 'react'
import styled from 'styled-components'

const Feature13 = ({ range, text, range2, text2, backgroundImageDesktop, text3 }) => {
    return (
        <Wrap>
            <BlueTesla bgImageDesktop={backgroundImageDesktop}>
                <BlueBox>
                    <BlueMaxRange>
                        <BlueNumber>
                            <div>
                                <h2>{range}</h2>
                                <span>mi</span>
                            </div>
                        </BlueNumber>
                        <p>{text}</p>
                    </BlueMaxRange>
                    <BlueRange>
                        <BlueNumber>
                            <div>
                                <h2>{range2}</h2>
                                <span>mi</span>
                            </div>
                        </BlueNumber>
                        <p>{text2}</p>
                    </BlueRange>
                    <ChargePlaces>
                        <BlueNumber>
                            <div>
                                <h2>30.000+</h2>
                            </div>
                        </BlueNumber>
                        <p>Superchargers placed along popular routes</p>
                    </ChargePlaces>
                </BlueBox>
            </BlueTesla>
            <GoAnyWhere>
                <GoRange>
                    <div>
                        <h2>Range</h2>
                        <h1>Go Anywhere</h1>
                    </div>
                </GoRange>
                <Travel>
                    <Farther>
                        <p>{text3}</p>
                    </Farther>
                    <OrderNow>
                        <OrderBox>
                            <button>ORDER NOW</button>
                        </OrderBox>
                    </OrderNow>
                </Travel>
            </GoAnyWhere>
        </Wrap>
    )
}
export default Feature13

const Wrap = styled.div`
display: flex;
`
const BlueTesla = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
min-width: 894px;
height: 100vh;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`
const BlueBox = styled.div`
display: flex;
justify-content: space-evenly;
margin: 34px 35px 72px;
padding: 0 30px;
`
const BlueMaxRange = styled.div`
display: flex;
flex-direction: column;
padding-right: 20px;
p {
    width: 238px;
    color: white;
    font-size: 13px;
    line-height: 1.3;
}
`
const BlueNumber = styled.div`
display: flex;
justify-content: center;

div{
    height: 48px;
    display: flex;
    align-items: baseline;
}
h2 {
    letter-spacing: 1.5px;
    color: white;
    margin-bottom: -2px;
    font-size: 32px;
}
span {
    color: white;
    padding-left: 3px;
    font-size: 26px;
}
`
const BlueRange = styled.div`
padding: 0 20px;
p {
    width: 210 px;
    color: white;
    font-size: 13px;
    line-height: 1.3;
}
`
const ChargePlaces = styled.div`
padding-left: 20px;
p {
    width: 230.8;
    color: white;
    font-size: 13px;
    line-height: 1.3;
}
`
const GoAnyWhere = styled.div`
padding: 32px 40px;
`
const GoRange = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
padding-top: 16px;
height: 76px;
div {
    margin-top: 34px;
}
h2 {
    text-align: left;
    font-size: 17px;
    margin: 0;
    height: 17px;
}
h1 {
    text-align: left;
    font-size: 28px;
    color: black;
    margin: 0;
    height: 36px;
}
`
const Travel = styled.div`
display: flex;
flex-direction: column;
// justify-content: space-around;
padding-top: 1rem ;
`
const Farther = styled.div`
padding-bottom: 32px;
p {
    text-align: left;
    font-size: 16px;
    line-height: 1.4;
}
`
const OrderNow = styled.div`
display: flex;
align-items: center;
height: 271px;

`
const OrderBox = styled.div`
padding-bottom: 3rem;
margin-top: 1rem;
button {
    padding: 8px 24px;
    background: #ffffff;
    border: 3px solid black;
    border-radius: 9999px;
    cursor: pointer;
    &:hover {
        background: black;
        color: #ffffff;
    }
}
`