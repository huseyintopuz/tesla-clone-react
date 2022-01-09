import React from 'react'
import styled from 'styled-components'

const Feature15 = () => {
    return (
        <Wrap>
            <div>
                <button>LEARN MORE</button>
            </div>
        </Wrap>
    )
}

export default Feature15

const Wrap = styled.div`
height: 104px;
div {
    margin: 0 64.703px;
    padding: 0 3rem;
    button {
        height: 40px;
        padding: 4px 24px;
        border: 3px solid black;
        border-radius: 25px;
        background: #ffffff;
        cursor: pointer;
        &:hover {
            background: black;
            color: white;
        }
    }
}
`
