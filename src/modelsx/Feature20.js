import React, { useState } from 'react'
import styled from 'styled-components'
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

const Feature20 = () => {
    const [step, setStep] = useState("plaid");

    return (
        <Wrap>
            <Cover5>
                <Box20></Box20>
                <Box20>
                    <Specs>Model S Specs</Specs>
                    <Buttons>
                        <LeftButton selected={step === 'plaid' ? true : false} onClick={() => setStep('plaid')} >Model S Plaid</LeftButton>
                        <RightButton selected={step === 'normal' ? true : false} onClick={() => setStep('normal')}>Model S</RightButton>
                    </Buttons>
                    {step === 'plaid' ?
                        <LeftSide />
                        :
                        <RightSide />
                    }
                </Box20>
            </Cover5>
        </Wrap>
    )
}

export default Feature20

const Wrap = styled.div`
width: 100vw;
height: 100vh;
padding-top: 3rem;
background: black;
background-image: url("/images/MS-Specs-Hero-Desktop.webp");
background-size: contain;
background-position: -50px 75px;
background-repeat: no-repeat;
`
const Cover5 = styled.div`
padding: 0 3rem;
display: flex;
justify-content: space-evenly;
`
const Box20 = styled.div`
width: 434.23px;
height: 606px;
`
const Specs = styled.div`
padding-bottom: 24px;
font-size: 29px;
text-align: left;
color: white;
`
const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const LeftButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
border-color: ${props => props.selected ? 'white' : '#393C41'};
border-width: ${props => props.selected ? '3px' : '1px'};
border-style: solid;
padding: 4px 24px;
border-radius: 25px;
width: 214px;
height: 32px;
background: black;
color: white;
cursor: pointer;
&:focus {
    border: 3px solid white;
}
`
const RightButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 4px 24px;
border: 1px solid #393C41;
border-radius: 25px;
width: 214px;
height: 32px;
background: black;
color: white;
cursor: pointer;
&:focus {
    border: 3px solid white;
}
`


