import React from "react";
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

export default function SimpleSlider2() {
    return (
        <Carousel autoplay>
            <div>
                <Image1 />
            </div>
            <div>
                <Image2 />
            </div>
            <div>
                <Image3 />
            </div>
            <div>
                <Image4 />
            </div>
        </Carousel>

    );
}

const Image1 = styled.div`
width: 100%;
height: 534px;
z-index: 1;
// width: 100vw;
// height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/map_san_jose_bg@2x.avif");
@media (max-width:900px) {
    background-image: url("/images/map_san_jose_bg_mobile@2x.avif");
}
`
const Image2 = styled.div`
width: 1164px;
height: 534px;
z-index: 1;
// width: 100vw;
// height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/map_berkeley_bg@2x.avif");
@media (max-width:900px) {
    background-image: url("/images/map_berkeley_bg_mobile@2x.avif");
}
`
const Image3 = styled.div`
width: 1164px;
height: 534px;
z-index: 1;
// width: 100vw;
// height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/map_newyork_bg@2x.avif");
@media (max-width:900px) {
    background-image: url("/images/map_newyork_bg_mobile.avif");
}
`
const Image4 = styled.div`
width: 1164px;
height: 534px;
z-index: 1;
// width: 100vw;
// height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/map_florida_bg@2x.avif");
@media (max-width:900px) {
    background-image: url("/images/map_florida_bg_mobile.avif");
}
`
