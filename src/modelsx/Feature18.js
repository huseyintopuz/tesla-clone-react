import React from 'react'
import styled from 'styled-components'

const Feature18 = () => {
    return (
        <Wrap>
            <AutoPilot>
                <h2>Autopilot</h2>
                <h1>Future of Driving</h1>
                <AutoButton>
                    <button>ORDER NOW</button>
                </AutoButton>
            </AutoPilot>
            <AutoPilot2>
                <p>Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.</p>
            </AutoPilot2>
        </Wrap>
    )
}

export default Feature18

const Wrap = styled.div`
height: 200px;
display: flex;
justify-content: center;
padding: 0 3rem;

`
const AutoPilot = styled.div`
width: 351px;
padding-top: 3rem;
h2 {
    margin: 0;
    text-align: left;
    font-size: 17px;
    height: 17px;
}
h1 {
    margin: 0;
    text-align: left;
    font-size: 28px;
    height: 36px;
}
`
const AutoButton = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
    button {
        padding: 4px 24px;
        height: 40px;
        border: 3px solid black;
        border-radius: 25px;
        cursor: pointer;
        background: #ffffff;
        &:hover {
            background: black;
            color: white;
        }       
    }
`
const AutoPilot2 = styled.div`
    padding-top: 3rem;
    width: 624px;
    opacity: 0.8;
    p {
        padding-bottom: 2rem;
        text-align: left;
        margin: 0;
        font-size: 15px;
        letter-spacing: 1px;
        color: black;
    }
`
