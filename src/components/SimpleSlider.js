import React from "react";
// import Slider from "react-slick";
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider({ 
    backgroundImageDesktop, 
    backgroundImageMobile, 
    backgroundImageDesktop2, 
    backgroundImageMobile2,
    backgroundImageDesktop3, 
    backgroundImageMobile3, 
    backgroundImageDesktop4, 
    backgroundImageMobile4, 
    title, 
    explanation,
    explanation2
    }) {

    return (
        <Carousel autoplay>
            <div>
                <Image1 bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile} />
                <Content>
                    <h2>17” Cinematic Display</h2>
                    <p>With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best screen to watch anywhere.</p>
                </Content>
            </div>
            <div>
                <Image2 bgImageDesktop={backgroundImageDesktop2} bgImageMobile={backgroundImageMobile2} />
                <Content>
                    <h2>Focus on Driving</h2>
                    <p>{explanation}</p>
                </Content>
            </div>
            <div>
                <Image3 bgImageDesktop={backgroundImageDesktop3} bgImageMobile={backgroundImageMobile3} />
                <Content>
                    <h2>Perfect Environment</h2>
                    <p>Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.</p>
                </Content>
            </div>
            <div>
                <Image4 bgImageDesktop={backgroundImageDesktop4} bgImageMobile={backgroundImageMobile4} />
                <Content>
                    <h2>{title}</h2>
                    <p>{explanation2}</p>
                </Content>
            </div>
        </Carousel>
        // <Carousel afterChange={onChange}>
        //     <div>
        //         <h3 style={contentStyle}>1</h3>
        //     </div>
        //     <div>
        //         <h3 style={contentStyle}>2</h3>
        //     </div>
        //     <div>
        //         <h3 style={contentStyle}>3</h3>
        //     </div>
        //     <div>
        //         <h3 style={contentStyle}>4</h3>
        //     </div>
        // </Carousel>

    );
}
const Image1 = styled.div`
z-index: 2;
width: 1164px;
height: 535.75px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
@media (max-width:900px) {
    background-image: url("/images/MS-Interior-Carousel-A-Mobile.avif");
}
`
const Image2 = styled.div`
z-index: 2;
width: 1164px;
height: 535.75px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/MS-Interior-Carousel-B-Desktop.avif");
@media (max-width:900px) {
    background-image: url("/images/MS-Interior-Carousel-B-Mobile.avif");
}
`
const Image3 = styled.div`
z-index: 2;
width: 1164px;
height: 535.75px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/MS-Interior-Carousel-C-Desktop.avif");
@media (max-width:900px) {
    background-image: url("/images/MS-Interior-Carousel-C-Mobile.avif");
}
`
const Image4 = styled.div`
z-index: 2;
width: 1164px;
height: 535.75px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/MS-Interior-Carousel-D-Desktop.avif");
@media (max-width:900px) {
    background-image: url("/images/MS-Interior-Carousel-D-Mobile.avif");
}
`
const Content = styled.div`
margin-left:10rem;
display: flex;
flex-direction: column;
align-items: start;
justify-content: middle;
h2, p {
    text-align: left;
    color: white;
}
h2 {
    margin-top: 1rem;
}
ul li {
    width: 3px;
    height: 3px;
    background: black;
}
`