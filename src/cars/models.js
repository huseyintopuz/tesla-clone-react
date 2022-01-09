import React from 'react'
import styled from 'styled-components'
import SectionSX from '../modelsx/SectionSX'
import Feature from '../modelsx/Feature'
import Feature4 from '../modelsx/Feature4'
import Feature5 from '../modelsx/Feature5'
import Feature6 from '../modelsx/Feature6'
import Feature7 from '../modelsx/Feature7'
import Feature8 from '../modelsx/Feature8'
import Feature9 from '../modelsx/Feature9'
import Feature10 from '../modelsx/Feature10'
import Feature12 from '../modelsx/Feature12'
import Feature13 from '../modelsx/Feature13'
import Feature14 from '../modelsx/Feature14'
import Feature15 from '../modelsx/Feature15'
import Feature16 from '../modelsx/Feature16'
import Feature17 from '../modelsx/Feature17'
import Feature18 from '../modelsx/Feature18'
import Feature19 from '../modelsx/Feature19'
import Feature20 from '../modelsx/Feature20'
import Feature21 from '../modelsx/Feature21'
import SimpleSlider from '../components/SimpleSlider'
import Footer from '../components/Footer';
import Space5 from '../components/Space5'
import WithRollout from '../components/WithRollOut'

const ModelS = () => {

    return (
        <Wrap>
            <SectionSX
                title="Model S"
                range="396"
                acceleration="1.99"
                speed="200"
                type="mph"
                topSpeed="Top Speed†"
                power="1,020"
                backgroundImageDesktop="ms-main-hero-desktop.avif"
                backgroundImageMobile="MS-Hero-Mobile.avif"
            />
            <Feature
                backgroundImageDesktop="MS-Interior-Hero-Desktop.avif"
                backgroundImageMobile="MS-Interior-Hero-Mobile.avif"
            />
            <Space5 />
            <Feature2>
                <BoxBox>
                    <SimpleSlider
                        backgroundImageDesktop="MS-Interior-Carousel-A-Desktop.avif"
                        backgroundImageMobile="MS-Interior-Carousel-A-Mobile.avif"
                        backgroundImageDesktop2="MS-Interior-Carousel-B-Desktop.avif"
                        backgroundImageMobile2="MS-Interior-Carousel-B-Mobile.avif"
                        backgroundImageDesktop3="MS-Interior-Carousel-C-Desktop.avif"
                        backgroundImageMobile3="MS-Interior-Carousel-C-Mobile.avif"
                        backgroundImageDesktop4="MS-Interior-Carousel-D-Desktop.avif"
                        backgroundImageMobile4="MS-Interior-Carousel-D-Mobile.avif"
                        explanation="The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in."
                        title="Redesigned Second Row"
                        explanation2="Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging."
                    />
                </BoxBox>
            </Feature2>
            <Feature3>
                <Content>
                    <GridA />
                    <Info>
                        <h4>Game from Anywhere</h4>
                        <p>Up to 10 teraflops of processing power enables in- <br />
                            car gaming on-par with today’s newest consoles. <br />
                            Wireless controller compatibility lets you game <br />
                            from any seat.</p>
                    </Info>
                </Content>
                <Content>
                    <Info>
                        <h4>Stay Connected</h4>
                        <p>Multi-device Bluetooth, wireless and USB-C <br />
                            charging for every passenger, with enough power <br />
                            to fast-charge your tablets and laptop.</p>
                    </Info>
                    <GridB />
                </Content>
                <Content>
                    <GridC />
                    <Info>
                        <h4>Your Best Audio System</h4>
                        <p>A 22-speaker, 960-watt audio system with Active <br />
                            Road Noise Reduction offers the best listening <br />
                            experience wherever you are.</p>
                    </Info>
                </Content>
                <Content>
                    <Info>
                        <h4>Real Storage</h4>
                        <p>With front and rear trunks and fold-flat seats, Model <br />
                            S is a luxury car where you can fit your bike without <br />
                            taking the wheel off, and your luggage too.</p>
                    </Info>
                    <GridD />
                </Content>
            </Feature3>
            <Feature4
                time="9.9"
                category="@155 mph 1/4 mile"
                time2="1.99"
                backgroundImageDesktop="MS-Performance-Hero-Desktop.avif"
                backgroundImageMobile="MS-Performance-Hero-Mobile.jpeg"
            />
            <Feature5
                text="With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. All Model S powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs."
            />
            <Feature6
                text="Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."
            />
            <Feature7
                backgroundImageDesktop="Model-S-Performance-Tri-Motor-Desktop.webp"
                backgroundImageMobile="Model-S-Performance-Tri-Motor-Mobile.webp"
            />
            <Feature8
                title="Model S"
                text="Dual Motor All-Wheel Drive platform allows for the
                longest range, and now delivers insane power and
                acceleration."
                acceleration="3.1"
                range="405"
                rangeType="range (est.)"
                title2="Model S Plaid"
                text2="Tri Motor All-Wheel Drive platform with torque
                vectoring features three independent motors, each with
                a carbon-sleeved rotor that maintains peak power
                output all the way to top speed."
                acceleration2="1.99"
                range2="396"
            />
            <WithRollout />
            <Feature9
                text="Performance-focused chassis"
                drag="0.208"
                text2="Lowest-drag car on Earth"
                height="127vh"
                backgroundImageDesktop="MS-Exterior-Hero-Desktop.avif"
                backgroundImageMobile="MS-Exterior-Hero-Mobile.avif"
            />
            <Feature10
                text="With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built
                for speed and range.Together with a wider body and chassis, these elements help
                you go down the straight or around corners quicker than ever."
            />
            <Feature11 />
            <Feature12
                text="Responsive Performance"
                text2="Staggered, performance-focused wheels and tires
            keep the car planted and transfer even more power
            down to the road."
                text3="Attention to detail on all exterior surfaces makes
            Model S the most aerodynamic production car on
            Earth."
                backgroundImageDesktop="MS-Exterior-Grid-B-Desktop.webp"
                backgroundImageMobile="MS-Exterior-Grid-B-Mobile.webp"
                backgroundImageDesktop2="MS-Exterior-Grid-A-Desktop.webp"
                backgroundImageMobile2="MS-Exterior-Grid-A-Mobile.webp"
                backgroundImageDesktop3="MS-Exterior-Grid-C-Desktop.webp"
                backgroundImageMobile3="MS-Exterior-Grid-C-Mobile.webp"
            />
            <Feature13
                range="405"
                text="Go anywhere with up to 405 miles of estimated range on a single charge"
                range2="200"
                text2="Supercharge up to 200 miles in 15 minutes"
                text3="Travel farther on a single charge than any other
                electric vehicle—and keep going with access to
                30,000+ Superchargers globally.By combining
                up to 405 miles of estimated range with Tesla
                fast charging technology, you’ll spend less time
                charging and even more time on the road."
                backgroundImageDesktop="MS-Range-Hero-Desktop.avif"
            />
            <Space4 />
            <Feature14 />
            <Feature15 />
            <Feature16
                text="High Impact Protection"
                text2="Model S is built from the ground up as an
                electric vehicle, with a high-strength architecture
                and floor-mounted battery pack for incredible
                occupant protection and low rollover risk.
                Every Model S includes Tesla’s latest active
                safety features, such as Automatic Emergency Braking,
                at no extra cost."
            />
            <Feature17 />
            <Feature18 />
            <Feature19 />
            <Feature20 />
            <Feature21
            text="Model S"
            backgroundImageDesktop="MS-Order-Hero-Desktop.jpeg"
            />
            <Footer />
        </Wrap>
    )
}

export default ModelS

const Wrap = styled.div`
height: 100vh;
z-index: 0;
 
`
const Feature2 = styled.div`
background: black;
width: 100vw;
height: 679.75px;


div p {
     padding: 0 0 32px;
}
`
const BoxBox = styled.div`
margin: 0 17px;
padding: 1rem 3rem;
`
const Feature3 = styled.div`
background-color: black;
padding: 3rem;
`
const Content = styled.div`
display: flex;
justify-content: space-evenly;
`
const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 400px;
height: 279px;
text-align: left;
h4 {
    padding: 32px 0 8px;
    font-size: 20px;
    color: white;
    padding-bottom: 8px;
}
p {
    padding-bottom: 16px;
    color: white;
    line-height: 1.3;
}
`
const GridA = styled.div`
width: 495px;
height: 280px;
background-image: url("/images/MS-Interior-Grid-A-Desktop.avif");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: url("/images/MS-Interior-Grid-A-Mobile.avif");
}
`
const GridB = styled.div`
width: 497px;
height: 280px;
background-image: url("/images/MS-Interior-Grid-B-Desktop.avif");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: url("/images/MS-Interior-Grid-B-Mobile.avif");
}
`
const GridC = styled.div`
width: 494px;
height: 280px;
background-image: url("/images/MS-Interior-Grid-C-Desktop.avif");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: url("/images/MS-Interior-Grid-C-Mobile.avif");
}
`
const GridD = styled.div`
width: 497px;
height: 280px;
background-image: url("/images/MS-Interior-Grid-D-Desktop.avif");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:600px) {
    background-image: url("/images/MS-Interior-Grid-D-Mobile.avif");
}
`
const Feature11 = styled.div`
background: black;
width: 1294px;
height: 74px;
`
const Space4 = styled.div`
height: 74px;
`