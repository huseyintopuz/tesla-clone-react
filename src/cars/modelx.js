import React from 'react'
import styled from 'styled-components'
import SectionSX from '../modelsx/SectionSX'
import Feature from '../modelsx/Feature'
import Space5 from '../components/Space5'
import SimpleSlider from '../components/SimpleSlider'
import Feature4 from '../modelsx/Feature4'
import Feature5 from '../modelsx/Feature5'
import Feature6 from '../modelsx/Feature6'
import Feature7 from '../modelsx/Feature7'
import Feature8 from '../modelsx/Feature8'
import WithRollOut from '../components/WithRollOut'
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
import Feature22 from '../modelsx/Feature22'
import Feature21 from '../modelsx/Feature21'
import Feature23 from '../modelsx/Feature23'
import Footer from '../components/Footer'
const ModelX = () => {
    return (
        <Wrap>
            <SectionSX
                title="Model X"
                range="333"
                acceleration="2.5"
                speed="9.9"
                type="s"
                topSpeed="1/4 Mile"
                backgroundImageDesktop="MX-Hero-Desktop.jpeg"
            />
            <Feature
                backgroundImageDesktop="MX-Interior-Hero-Desktop.jpeg"
                backgroundImageMobile="MX-Interior-Hero-Mobile.jpeg"
            />
            <Space5 />
            <Feature2>
                <BoxBox>
                    <SimpleSlider
                        backgroundImageDesktop="MX-Interior-Carousel-A-Desktop.jpeg"
                        backgroundImageMobile="MX-Interior-Carousel-A-Mobile.jpeg"
                        backgroundImageDesktop2="MX-Interior-Carousel-B-Desktop.jpeg"
                        backgroundImageMobile2="MX-Interior-Carousel-B-Mobile.jpeg"
                        backgroundImageDesktop3="MX-Interior-Carousel-C-Desktop.jpeg"
                        backgroundImageMobile3="MX-Interior-Carousel-C-Mobile.jpeg"
                        backgroundImageDesktop4="MX-Interior-Carousel-D-Desktop.jpeg"
                        backgroundImageMobile4="MX-Interior-Carousel-D-Mobile.jpeg"
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
            </Feature3>
            <Feature4
                time="9.23"
                category="1/4 mile"
                time2="2.5"
                backgroundImageDesktop="MX-Performance-Hero-Desktop.jpeg"
            />
            <Feature5
                text="With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed."
            />
            <Feature6
                text="Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."
            />
            <Feature7
                backgroundImageDesktop="MX-Performance-Tri-Motor-Desktop.jpeg"
                backgroundImageMobile="MX-Performance-Tri-Motor-Mobile.jpeg"
            />
            <Feature8
                title="Model X"
                text="Dual Motor All-Wheel Drive platform has the longest
                 range, and now delivers incredible power and
                 acceleration."
                acceleration="3.8"
                range="348"
                rangeType="range (RANGE est.)"
                title2="Model X Plaid"
                text2="Tri Motor All-Wheel Drive platform with torque
                vectoring features three independent motors, each with
                a carbon fiber-sleeved rotor that maintains peak power
                output all the way to top speed."
                acceleration2="2.5"
                range2="333"
            />
            <WithRollOut />
            <Feature23 />
            <Feature9
                text="New wheels and improved handling"
                drag="0.24"
                text2="Lowest-drag SUV on Earth"
                height="388px"
                backgroundImageDesktop="MX-Exterior-Hero-Desktop.jpeg"
                backgroundImageMobile="MX-Exterior-Hero-Desktop.jpeg"
            />
            <Feature10
                text="With the lowest drag coefficient of any SUV, Model X is built for speed and
                 range. Refined aerodynamic elements work together with new wheels and tires
                  to help you travel farther, with sharper handling and better ride comfort."
            />
            <Feature11 />
            <Feature12
                text="New Wheels and Tires"
                text2="New performance tires deliver better handling and
                ride quality with lower rolling resistance and are
                paired with new aerodynamic wheels for an updated look."
                text3="Attention to detail on all exterior surfaces makes
                Model X the most aerodynamic production SUV on Earth."
                backgroundImageDesktop="MX-Exterior-Grid-B-Desktop.jpeg"
                backgroundImageMobile="MX-Exterior-Grid-B-Mobile.jpeg"
                backgroundImageDesktop2="MX-Exterior-Grid-A-Desktop.jpeg"
                backgroundImageMobile2="MX-Exterior-Grid-A-Mobile.jpeg"
                backgroundImageDesktop3="MX-Exterior-Grid-C-Desktop.jpeg"
                backgroundImageMobile3="MX-Exterior-Grid-C-Mobile.jpeg"
            />
            <Feature13
                range="348"
                text="Go anywhere with up to 348 miles of estimated range on a single charge"
                range2="175"
                text2="Supercharge up to 175 miles in 15 minutes"
                text3="Travel farther on a single charge than any other
                 electric SUV—and keep going with access to 30,000+
                Superchargers globally. By combining up to
                348 miles of estimated range with Tesla fast charging
                technology, you’ll spend less time charging and even
                more time on the road."
                backgroundImageDesktop="MX-Range-Hero-Desktop.jpeg"
            />
            <Space4 />
            <Feature14 />
            <Feature15 />
            <Feature16
                text="Built for Safety"
                text2="Model X is built from the ground up as an
                electric vehicle, with a high-strength architecture and
                floor-mounted battery pack for incredible occupant
                protection and low rollover risk. Every Model X includes
                Tesla’s latest active safety features, such as Automatic
                Emergency Braking, at no extra cost."
            />
            <Feature17 />
            <Feature18 />
            <Feature19 />
            <Feature22 />
            <Feature21
            text="Model X"
            backgroundImageDesktop="MX-Order-Hero-Desktop.jpeg"
            />
            <Footer />
        </Wrap>
    )
}

export default ModelX

const Wrap = styled.div`
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
const Feature11 = styled.div`
background: black;
width: 1294px;
height: 74px;
`
const Space4 = styled.div`
height: 74px;
`