import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'

const Home = () => {
    return (
        <Container >
            <Header />
            <Section
            title="Model S"
            order="Order Online for"
            touchless="Touchless Delivery"
            backgroundImageDesktop="ms-homepage-desktop.webp"
            backgroundImageMobile="ms-homepage-mobile.avif"
            leftButton="CUSTOM ORDER"
            rightButton="EXISTING INVENTORY"
            />
            <Section
            title="Model Y"
            order="Order Online for"
            touchless="Touchless Delivery"
            backgroundImageDesktop="Desktop-ModelY.webp"
            backgroundImageMobile="Mobile-ModelY.avif"
            leftButton="CUSTOM ORDER"
            rightButton="EXISTING INVENTORY"
            />
            <Section 
            title="Model 3"
            order="Order Online for"
            touchless="Touchless Delivery"
            backgroundImageDesktop="M3-Homepage-D.webp"
            backgroundImageMobile="M3-Homepage-M.avif"
            leftButton="CUSTOM ORDER"
            rightButton="EXISTING INVENTORY"/>
            <Section 
            title="Model X"
            order="Order Online for"
            touchless="Touchless Delivery"
            backgroundImageDesktop="ModelX-Homepage-D.webp"
            backgroundImageMobile="ModelX-Homepage-M.avif"
            leftButton="CUSTOM ORDER"
            rightButton="EXISTING INVENTORY"/>
            <Section 
            title="Solar Panels"
            order="Lowest Cost Solar Panels in America"
            touchless=""
            backgroundImageDesktop="_25-HP-SolarPanels-D.webp"
            backgroundImageMobile="_25-HP-SolarPanels-M.avif"
            leftButton="ORDER NOW"
            rightButton="LEARN MORE"/>
            <Section 
            title="Solar Roof"
            order="Produce Clean Energy "
            touchless="From Your Roof"
            backgroundImageDesktop="HP-SR-Design-D.webp"
            backgroundImageMobile="HP-SR-Design-M.avif"
            leftButton="ORDER NOW"
            rightButton="LEARN MORE"/>
            <Section 
            title="Accessories"
            order=""
            touchless=""
            backgroundImageDesktop="Desktop-Accessories.avif"
            backgroundImageMobile="Mobile-Accessories.avif"
            leftButton="SHOP NOW"
            />
        </Container>
    )
}

export default Home

const Container = styled.div `
height: 100vh;
`
