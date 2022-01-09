import React from 'react'
import styled from 'styled-components'

const Feature23 = ({ range, text, range2, text2, backgroundImageDesktop, text3 }) => {
    return (
        <Wrap>
            <GoAnyWhere>
                <GoRange>
                    <div>
                        <h2>Utility</h2>
                        <h1>Even More Capable</h1>
                    </div>
                </GoRange>
                <Travel>
                    <Farther>
                        <p>With the most storage space and towing capacity of
                        any electric SUV, and seating for up to seven adults,
                        Model X delivers maximum utility. Front doors open
                        and close automatically, Falcon Wing doors allow for
                        easier loading and a standard trailer hitch lets you
                        bring your gear anywhere you go.</p>
                    </Farther>
                    <OrderNow>
                        <OrderBox>
                            <button>ORDER NOW</button>
                        </OrderBox>
                    </OrderNow>
                </Travel>
            </GoAnyWhere>
            <BlueTesla bgImageDesktop={backgroundImageDesktop}>
                <BlueBox>
                    <BlueMaxRange>
                        <BlueNumber>
                            <div>
                                <h2>91</h2>
                                <span>ft³</span>
                            </div>
                        </BlueNumber>
                        <p>Storage capacity</p>
                    </BlueMaxRange>
                    <BlueRange>
                        <BlueNumber>
                            <div>
                                <h2>5,000</h2>
                                <span>lbs</span>
                            </div>
                        </BlueNumber>
                        <p>Towing capacity</p>
                    </BlueRange>
                    <ChargePlaces>
                        <BlueNumber>
                            <div>
                                
                                <svg viewBox="0 0 28 28">
      <use href="#tcl-badge-model-x-falcon-wings"></use>
    </svg>
                            </div>
                        </BlueNumber>
                        <p>Falcon Wing doors</p>
                    </ChargePlaces>
                </BlueBox>
            </BlueTesla>
        </Wrap>
    )
}
export default Feature23

const Wrap = styled.div`
display: flex;
`
const BlueTesla = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
min-width: 870px;
height: 100vh;
background-image: url("/images/MX-Utility-Hero-Desktop.jpeg");
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
width: 420px;
padding: 32px 40px 32px 48px;
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