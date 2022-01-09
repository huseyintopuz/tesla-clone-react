import React from 'react'
import styled from 'styled-components'

const Feature17 = () => {
    return (
        <Wrap>
            <AutoPilot>
                <Pilot>
                    <span>360°</span>
                    <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                </Pilot>
                <Pilot2>
                    <PilotDiv>
                        <span>250</span>
                        <span>m</span>
                    </PilotDiv>
                    <p>Powerful visual processing at up to 250 meters of range</p>
                </Pilot2>
                <Pilot3>
                    <div>
                        <img src="../images/autopilot.avif" alt="12"></img>
                        <Ultra>
                            <div>
                                <span>Ultrasonic</span>
                                <span>Sensors</span>
                            </div>
                        </Ultra>
                    </div>
                    <p>Detects nearby cars, prevents potential collisions and
                    assists with parking</p>
                </Pilot3>
            </AutoPilot>
        </Wrap>
    )
}

export default Feature17

const Wrap = styled.div`
width: 100vw;
height: 382px;
background-size: cover;
background-position: 50% 70%;
background-repeat: no-repeat;
background-image: url("/images/autopilot-poster.avif");
// @media (max-width:900px) {
//     background-image: url("/images/MS-Safety-Hero-Desktop.avif");
// }
`
const AutoPilot = styled.div`
display: flex;
flex-direction: column;

`
const Pilot = styled.div`
width: 270px;
margin-left: 150px;
padding: 10px 0;
span {
    display: block;
    text-align: left;
    font-size: 29px;
    font-weight: 600;
    color: black;
}
p {
    text-align: left;
}

`
const Pilot2 = styled.div`
width: 270px;
margin-left: 150px;
padding: 10px 0;
p {
    text-align: left;
}
`
const PilotDiv = styled.div`
display: flex;
align-items: baseline;
span:first-child {
    font-size: 28px;
    font-weight: 600;
    color: black;
}
span:last-child {
    font-size: 24px;
    padding-left: 3px;
    font-weight: 600;
    color: black;
}
`
const Pilot3 = styled.div`
width: 270px;
margin-left: 150px;
padding: 10px 0;
div{
  display: flex;
  height: 50px;
  img {
      width: 41px;
      height: 40px;
  }  
}
p {
    text-align: left;
}
`
const Ultra = styled.div`
padding: 0 5px;
height: 42px;
div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
span:first-child {
    padding-right: 3px;
}
span {
    font-weight: 600;
    color: black;
}


`
