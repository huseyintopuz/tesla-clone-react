import React from "react";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import video1 from "../videos/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.webm"
import video2 from "../videos/A7I6LP_lane_change_0.mp4-2000_PYSUF4.webm"
import video3 from "../videos/ZZNM9S_summon_1.mp4-2000_OQKCDY.webm"
import video4 from "../videos/WM5XUG_parking.mp4-2000_EQUBJE.mp4"


export default function SimpleSlider3() {
    return (
        <Carousel autoplay>
            <div>
                <video height="654.75px" src={video1} loop autoPlay />
            </div>
            <div>
                <video height="654.75px" src={video2} loop autoPlay />
            </div>
            <div>
                <video height="654.75px" src={video3} loop autoPlay />
            </div>
            <div>
                <video height="654.75px" src={video4} loop autoPlay />
            </div>
        </Carousel>

    );
}

