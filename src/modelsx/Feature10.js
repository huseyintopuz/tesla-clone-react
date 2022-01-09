import React from 'react'
import styled from 'styled-components'

const Feature10 = ( { text} ) => {
    return (
        <Wrap>
            <Box10>
                <Head10>
                    <h2>Exterior</h2>
                    <h1>Designed for Efficiency</h1>
                </Head10>
                <button>ORDER NOW</button>
            </Box10>
            <Explanation10>
                <p>{text}</p>
            </Explanation10>
        </Wrap>
    )
}

export default Feature10

const Wrap = styled.div`
display: flex;
padding: 0 48px 10px;;
justify-content: center;
`
const Box10 = styled.div`
width: 351px;
text-align: left;
padding: 48px 16px 16px 0;
button {
   margin-top: 1rem;
   padding: 5px 45px;
   background-color: #ffffff;
   border: 3px solid black;
   border-radius: 9999px;
   cursor: pointer;
   &:hover {
    background-color: black;
    color: #ffffff;
   }
} 
`
const Head10 = styled.div`
h2 {
    height: 17px;
    margin: 0;
    font-size: 17px;
}
h1 {
    height: 36px;
    margin: 0;
    color: black;
    font-size: 28px;
    font-weight: 600;
    opacity: 0.7;
}
`
const Explanation10 = styled.div`
width: 600px;
padding: 48px 0 16px;
text-align: left;
p {
    font-size: 15.5px;
    line-height: 1.6;
}
`