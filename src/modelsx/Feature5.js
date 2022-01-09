import React from 'react'
import styled from 'styled-components'

const Feature5 = ( {text} ) => {
    return (
        <Wrap>
            <Box>
                <Head>
                    <h2>Plaid</h2>
                    <h1>Beyond Ludicrous</h1>
                </Head>
                <button>ORDER NOW</button>
            </Box>
            <Explanation>
                <p>{text}</p>
            </Explanation>
        </Wrap>
    )
}

export default Feature5

const Wrap = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 250px;

`
const Box = styled.div`
text-align: left;

button {
   margin-top: 1rem;
   padding: 7px 49px;
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
const Head = styled.div`
h2 {
    font-size: 17px;
    margin: 0;
    height: 17px;
}
h1 {
    margin: 0;
    height: 36px;
    color: black;
    font-size: 28px;
    font-weight: 600;
    opacity: 0.8;
}
`
const Explanation = styled.div`
width: 600px;
text-align: left;
p {
    width: 
    line-height: 1.6;
    font-size: 16px;
    padding: 16px 0;
    opacity: 0.9;
}
`
