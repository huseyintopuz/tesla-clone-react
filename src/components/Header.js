import React from 'react'
import styled from 'styled-components'
import { Tesla } from '../icons/Icon'


const Header = () => {
    return (
        <Container>            
            <Head>
                <Logo>
                    <Tesla />
                </Logo>
                <Cars>
                    <Model><a href="#">Model S</a></Model>
                    <Model><a href="#">Model 3</a></Model>
                    <Model><a href="#">Model X</a></Model>
                    <Model><a href="#">Model Y</a></Model>
                    <Model><a href="#">Solar Roofs</a></Model>
                    <Model><a href="#">Solar Panels</a></Model>
                </Cars>
                <MenuSection>
                    <Shop>Shop</Shop>
                    <Shop>Account</Shop>
                    <Menu>Menu</Menu>
                </MenuSection>
            </Head>            
        </Container>
    )
}

export default Header

const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
`
const Head = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 3rem;
font-size: 15px;
font-weight: 600;

`
const Logo = styled.svg`
width: 7.5rem;
height: 3rem;
cursor: pointer;
`
const Cars = styled.div`
display: flex;
cursor: pointer;
@media (max-width: 1200px) {
    display: none;
}

`
const Model = styled.div`
padding: 0.5rem 0.8rem;
border-radius: 12px;
&:hover {
    background-color: #C0CEDD;
}
`
const MenuSection = styled.div`
display:flex;
cursor: pointer;
`
const Shop = styled.div`
padding: 0.5rem 0.8rem;
border-radius: 12px;
&:hover {
    background-color: #C0CEDD;
}
@media (max-width: 1200px) {
    display: none;
}
`
const Menu = styled.div`
margin-right: 1.7rem;
padding: 0.5rem 0.95rem;
border-radius: 12px;
&:hover {
    background-color: #C0CEDD;
}

`

