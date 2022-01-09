import React from 'react'
import styled from 'styled-components'

const Feature8 = ( {title, text, acceleration, range, rangeType, title2, text2, acceleration2, range2} ) => {
    return (
        <Wrap>
            <Cover>
                    <Model>
                        <div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                        <Cover2>
                            <Acceleration>
                                <Number>
                                    <span>{acceleration}</span>
                                    <span>s</span>
                                </Number>
                                <p>0-60 mph</p>
                            </Acceleration>
                            <Range>
                                <Number>
                                    <span>{range}</span>
                                    <span>mi</span>
                                </Number>
                                <p>{rangeType}</p>
                            </Range>
                            <PeakPower>
                                <Number>
                                    <span>670</span>
                                    <span>hp</span>
                                </Number>
                                <p>peak power</p>
                            </PeakPower>
                        </Cover2>
                    </Model>
                    <ModelSPlaid>
                        <div>
                            <h3>{title2}</h3>
                            <p>{text2}</p>
                        </div>
                        <Cover2>
                            <Acceleration>
                                <Number>
                                    <span>{acceleration2}</span>
                                    <span>s*</span>
                                </Number>
                                <p>0-60 mph</p>
                            </Acceleration>
                            <Range>
                                <Number>
                                    <span>{range2}</span>
                                    <span>mi</span>
                                </Number>
                                <p>range (EPA est.)</p>
                            </Range>
                            <PeakPower>
                                <Number>
                                    <span>1,020</span>
                                    <span>hp</span>
                                </Number>
                                <p>peak power</p>
                            </PeakPower>
                        </Cover2>
                    </ModelSPlaid>
                </Cover>
        </Wrap>
    )
}

export default Feature8

const Wrap = styled.div`
display: flex;
justify-content: space-around;
background-color: #F5F5F5;
`
const Cover = styled.div`
display: flex;
justify-content: space-between;
width: 840px;
height: 226.5;
padding: 24px 0;
margin-bottom: 8px;

`
const Model = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 396px;
height: 226.5px;
padding: 16px;
margin: 3px;
text-align: left;
border: 3px solid black;
div h3 {
    margin: 0 0 16px;
    color: black;
}
div p {
    padding: 0 0 16px;
    font-size: 14px;
    line-height: 1.4;
    opacity: 0.8;
}
`
const Acceleration = styled.div`
width: 119.33px;
height: 46px;
`
const Number = styled.div`
span:first-child {
    font-size: 24px;
    font-weight: 600;
    margin-right: 6px;
    color: black;
}
span:last-child {
    font-size: 24px;
    font-weight: 600;
    color: black;
}
`
const Range = styled.div`
width: 119.33px;
height: 46px;
`
const PeakPower = styled.div`
width: 119.33px;
height: 46px;
`
const ModelSPlaid = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 396px;
height: 226.5px;
padding: 16px;
margin: 3px;
text-align: left;
border: 3px solid black;
div h3 {
    margin: 0 0 16px;
    color: black;
}
div p {
    padding: 0 0 16px;
    font-size: 14px;
    line-height: 1.4;
    opacity: 0.8;
}
`
const Cover2 = styled.div`
display: flex;
justify-content: flex-start;
`