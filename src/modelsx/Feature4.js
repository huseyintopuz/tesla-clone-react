import React from 'react'
import styled from 'styled-components'

const FeatureFour = ({ time, category, time2, backgroundImageDesktop, backgroundImageMobile }) => {
    return (
        <WrapTwo>
            <MsPerformance bgImageDesktop={backgroundImageDesktop} bgImageMobile={backgroundImageMobile}>
                <MsBox>
                    <MsPeakPower>
                        <MsNumber>
                            <h2>1,020</h2>
                            <span>hp</span>
                        </MsNumber>
                        <p>Peak power</p>
                    </MsPeakPower>
                    <MsRange>
                        <MsNumber>
                            <h2>{time}</h2>
                            <span>s</span>
                        </MsNumber>
                        <p>{category}</p>
                    </MsRange>
                    <MsAcceleration>
                        <MsNumber>
                            <h2>{time2}</h2>
                            <span>s</span>
                        </MsNumber>
                        <p>0-60 mph*</p>
                    </MsAcceleration>
                </MsBox>
            </MsPerformance>
        </WrapTwo>
    )
}

export default FeatureFour

const WrapTwo = styled.div`
`
const MsPerformance = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 1294px;
height: 480px;
background-image: ${props => `url("/images/${props.bgImageDesktop}")`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width:900px) {
    background-image: ${props => `url("/images/${props.bgImageMobile}")`};
}

`
const MsBox = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 1294px;
height: 176px;
padding: 34px 285px;
`
const MsAcceleration = styled.div`
p {
    margin: 0;
    color: white;
    font-size: 13px;
}
`
const MsNumber = styled.div`
display:flex;
align-items: baseline;
h2 {
    margin: 0;
    font-size: 30px;
    color: white;
}
span {
    font-size: 25px;
    padding-left: 3px;
    color: white;
    font-weight: 600;
}
`
const MsRange = styled.div`
p {
    margin: 0;
    color: white;
    font-size: 13px;
}
`
const MsPeakPower = styled.div`
p {
    margin: 0;
    color: white;
    font-size: 13px;
}
`
