import React from 'react'
import styled from 'styled-components'
import SimpleSlider3 from '../components/SimpleSlider3'

const Feature19 = () => {
    return (
        <Wrap>
            <SimpleSlider3 />
            <nav role="tablist">
                <NavBox>
                    <span>Navigate on Autopilot</span>
                    <BoxNav>
                        <p>Active guidance from on-ramp to off-ramp</p>
                    </BoxNav>
                </NavBox>
                <NavBox>
                    <span>Auto Lane Change</span>
                    <BoxNav>
                        <p>Automatically change lanes while driving on the highway</p>
                    </BoxNav>
                </NavBox>
                <NavBox>
                    <span>Summon</span>
                    <BoxNav>
                        <p>Automatically retrieve your car</p>
                    </BoxNav>
                </NavBox>
                <NavBox>
                    <span>Autopark</span>
                    <BoxNav>
                        <p>Parallel and perpendicular parking with a single touch</p>
                    </BoxNav>
                </NavBox>
            </nav>
        </Wrap>
    )
}

export default Feature19

const Wrap = styled.div`
margin: 0 17px;
padding: 3rem 3rem 4rem;
nav {
    margin: 0 162.5px;
    display: flex;
    justify-content: space-between;

}
`
const NavBox = styled.div`
width: 184px;
height: 168.5px;
padding: 19px 19px 20px;
border-top: 3px solid black;
cursor: pointer;
span{
    display: block;
    margin-bottom: 1rem;
    font-size: 17px;
    font-weight: 600;
    text-align: left;
}
`
const BoxNav = styled.div`
text-align: left;
p{
    font-size: 13px;
    font-weight: 600;
}
`
