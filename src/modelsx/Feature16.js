import React from 'react'
import styled from 'styled-components'

const Feature16 = ( {text, text2}) => {
    return (
        <Wrap>
            <Safety>
                <Safety2>
                    <h2>Safety</h2>
                    <h1>{text}</h1>
                </Safety2>
                <Safety3>
                    <p>{text2}</p>
                    <div>
                        <button>ORDER NOW</button>
                    </div>
                </Safety3>
            </Safety>
            <MsSafety />
        </Wrap>
    )
}

export default Feature16

const Wrap = styled.div`
display: flex;
width: 100vw;
height: 636px;
`
const Safety = styled.div`
width: 415px;
padding: 0 50px;
`
const Safety2 = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0 2rem;
text-align: left;
height: 165px;
justify-content: flex-end;

h2 {
    margin: 0;
    font-size: 17px;
    height: 17px;
    margin-bottom: 6px;
}
h1 {
    font-size: 28px;
    font-weight: 600;
    opacity: 0.9;
    height: 36px;
    align-content: flex-end;
    margin: -2px;   

}
`
const Safety3 = styled.div`
padding: 1rem 0 4rem;
height: 471px;
p {
    text-align: left;
    font-size: 15.5px;
    padding-bottom: 2rem;
    margin:0;
    line-height: 1.4;
}
div {
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
}
`
const MsSafety = styled.div`
width: 879px;
height: 636px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/MS-Safety-Hero-Desktop.avif");
// @media (max-width:900px) {
//     background-image: url("/images/MS-Safety-Hero-Desktop.avif");
// }
`
