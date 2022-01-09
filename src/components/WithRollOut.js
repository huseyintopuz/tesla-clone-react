import React from 'react'
import styled from 'styled-components'

const WithRollOut = () => {
    return (
        <Wrap>
            <p>* With rollout subtracted</p>
        </Wrap>
    )
}

export default WithRollOut

const Wrap = styled.div`
background-color: #F5F5F5;
padding-bottom: 4rem;
p {
    font-size: 13px;
    font-weight: 600;
    opacity: 0.8;
}
`