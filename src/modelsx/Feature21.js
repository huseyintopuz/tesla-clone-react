import React from 'react'
import styled from 'styled-components'

const Feature21 = ( {text, backgroundImageDesktop}) => {
    return (
        <Wrap>
            <MsOrder bgImageDesktop={backgroundImageDesktop}/>
            <ModelSBox>
                <Model>
                    <span>{text}</span>
                    <div>
                        <button>ORDER NOW</button>
                        <button>COMPARE</button>
                    </div>
                </Model>
                <Model></Model>
            </ModelSBox>
        </Wrap>
    )
}

export default Feature21

const Wrap = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 0;
`
const MsOrder = styled.div`
position: absolute;
top: 15%;
right: 10px;
width: 575px;
height: 319px;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
z-index: 1;
`
const ModelSBox = styled.div`
display: flex;
padding: 6rem 2rem 0;
justify-content: space-evenly;

`
const Model = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 434px;
height: 318px;
z-index: 5;
span {
    display: block;
    text-align: left;
    font-size: 28px;
    color: black;
    font-weight: 600;
    padding-bottom: 2rem;
}
div {
    padding: 16px 0;
    display: flex;
    button {
        width: 205px;
        height: 40px;
        padding: 4 24px;
        background-color: white;
        border: 3px solid black;
        border-radius: 25px;
        cursor: pointer;
        margin-right: 1rem;
        &:hover { 
            background: black;
            color: white;
        }
    }
}
`