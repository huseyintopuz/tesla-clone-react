import React from 'react'
import styled from 'styled-components'

const Feature6 = ({ text }) => {
    return (
        <Wrap>
            <PowerTrain>
                <h2>Electric Powertrain</h2>
                <p>{text}</p>
            </PowerTrain>
        </Wrap>
    )
}

export default Feature6

const Wrap = styled.div`
display: flex;
justify-content: space-around;
background-color: #F5F5F5;
`
const PowerTrain = styled.div`
width: 750px;
text-align: left;
h2 {
    padding-bottom: 16px;
    font-size: 28px;
    font-weight: 600;
}
p {
    font-size: 16px;
    padding-bottom: 32px;
    line-height: 1.6;
}
`