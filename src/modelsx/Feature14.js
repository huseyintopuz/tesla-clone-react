import React from 'react'
import styled from 'styled-components'
import SimpleSlider2 from '../components/SimpleSlider2'

const Feature14 = () => {
    return (
        <Wrap>
            <BoxBox2>
                <Freedom>
                    <span>Freedom to Travel</span>
                    <p>Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with <br />
                        Superchargers along the way.</p>
                </Freedom>
                <SimpleSlider2 />
                <nav role="tablist">
                    <NavBox>
                        <span>San Jose to Los Angeles</span>
                        <BoxNav>
                            <span>340</span>
                            <span>miles</span>
                        </BoxNav>
                    </NavBox>
                    <NavBox>
                        <span>Berkeley to Lake Tahoe</span>
                        <BoxNav>
                            <span>178</span>
                            <span>miles</span>
                        </BoxNav>
                    </NavBox>
                    <NavBox>
                        <span>Manhattan to Boston</span>
                        <BoxNav>
                            <span>211</span>
                            <span>miles</span>
                        </BoxNav>
                    </NavBox>
                    <NavBox>
                        <span>Fort Lauderdale to Orlando</span>
                        <BoxNav>
                            <span>195</span>
                            <span>miles</span>
                        </BoxNav>
                    </NavBox>
                </nav>
            </BoxBox2>
        </Wrap>
    )
}

export default Feature14

const Wrap = styled.div`
div p {
    padding: 0 0 32px;
}
div ul li {
    background: black;
}
`
const BoxBox2 = styled.div`
margin: 0 17px;
padding: 3rem;
nav {
    margin: 0 162px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
}
`
const NavBox = styled.div`
width: 184px;
height: 168.5px;
padding: 19px 19px 20px;
border-top: 3px solid black;
span:first-child {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 17px;
    font-weight: 600;
    text-align: left;
}
`
const BoxNav = styled.div`
padding-top: 2rem;
text-align: left;
span:first-child {
    margin-right: 5px;
    font-size: 28px;
}
`
const Freedom = styled.div`
display: flex;
flex-direction: column;
padding: 24px;
margin: 0 162px;
span {
    display: block;
    text-align: left;
    font-size: 28px;
    padding-bottom: 1rem;
    color: black;
}
p {
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
    padding-bottom: 1rem;
}
`