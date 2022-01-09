import React, { useState } from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
// import Car from '../cars/Car'
import { Tesla, World } from '../icons/Icon'
import CloseIcon from '@mui/icons-material/Close';
import { selectMenus } from '../features/car/menuSlices';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


const HeaderCars = () => {
    const [hamburgerStatus, setHamburgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    const menus = useSelector(selectMenus)
    const slugify = Text => {
        return Text.toLowerCase()
            .replace(/ /g, '')
            .replace(/[^\w-]+/g, '');
    };

    return (
        <Container>
            <Head>
                <Link to="/">
                    <Logo>
                        <Tesla />
                    </Logo>
                </Link>
                <Model>
                    {cars && cars.map((car, index) => (
                        <Link key={index}
                            to={`/${slugify(car)}`}>{car}</Link>
                    ))}
                </Model>

                <MenuSection>
                    <Shop><a href="#">Shop</a></Shop>
                    <Shop><a href="#">Account</a></Shop>
                    <Menu onClick={() => setHamburgerStatus(true)}><a href="#">Menu</a></Menu>
                </MenuSection>
                <HamburgerMenu show={hamburgerStatus}>
                    <Close>
                        <CloseButton onClick={() => setHamburgerStatus(false)} />
                    </Close>
                    {menus && menus.map((menu, index) => (
                        <li>
                            <a key={index} href="#">{menu}</a>
                        </li>
                    ))}
                    <Language>
                        <div>
                            <WorldIcon>
                                <World />
                            </WorldIcon>
                            <Selected>
                                <div>
                                    <strong>United States</strong>
                                </div>
                                <div>
                                    <span>English</span>
                                </div>
                            </Selected>
                        </div>
                    </Language>
                    <BackGround></BackGround>
                </HamburgerMenu>
            </Head>
        </Container >
    )
}

export default HeaderCars

const Container = styled.div`

`
const Head = styled.div`
position: relative;
top: 0;
left: 0;
right: 0;
z-index: 1;
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
// const Car = styled.div`
// display: flex;
// cursor: pointer;
// @media (max-width: 1200px) {
//     display: none;
// }

// `
const Model = styled.div`
padding: 0.5rem 0.8rem;
@media (max-width: 1200px) {
         display: none;
     }

    a {
        color: #393c41 !important;
        padding: 0.5rem 0.8rem;        
        border-radius: 12px;
        transition: all 0.25s ease-in-out;
        animation-name: modelAnimation;
        &:hover {
        background-color: #C0CEDD;
        }


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
a {
    color: #393c41 !important;
}
`
const Menu = styled.div`
margin-right: 1.7rem;
padding: 0.5rem 0.95rem;
border-radius: 12px;
&:hover {
    background-color: #C0CEDD;
}
a {
    color: #393c41 !important;
}

`
const HamburgerMenu = styled.ul`
position: fixed;
top: 0;
right: 0;
width: 300px;
height: 100%;
overflow: auto;
background-color: white;
transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
transition: transform 0.33s;

    li{
        list-style: none;
        display: flex;
        flex-direction: column;
        text-align:start;
        padding: 0px 32px;

            a{
            color: #393c41 !important;
            padding: 8px 14px;
            cursor: pointer;
            margin: 0 0 12px;
            width: 100%;
            &:hover {
                background-color: #F2F2F2;
                border-radius: 15px;
            }
        }
    }
    z-index: 16;
`
const Close = styled.div`
padding: 32px 24px 20px;
display: flex;
justify-content: flex-end; 
position: sticky;
top: 0;
background: white;
`

const CloseButton = styled(CloseIcon)`
cursor: pointer;

// right: 1rem;
// top: -1rem;
// float: right;
// padding-top: -1rem;
// margin-top: -1rem;
`
const Language = styled.div`

padding: 4px 40px;
    div {
        cursor: pointer;
        display: flex;
    }

`
const WorldIcon = styled.svg`
width: 32px;
height: 32px;
`
const Selected = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin-left: 1rem;
padding-top: 4px;
    div span {
        font-size: 12px;
        opacity: 0.7;
        padding-top: 7px;
        
        &:hover {
            border-bottom: 2px solid black;
        }
    }
`
const BackGround = styled.div`
height : 200px;

`
// const CloseButton = styled(CloseIcon)`
// cursor: pointer;
// position: sticky;
// right: 1rem;
// top: -1rem;
// float: right;
// padding-top: -1rem;
// margin-top: -1rem;
// `
