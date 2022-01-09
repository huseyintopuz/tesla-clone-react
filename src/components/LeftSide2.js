import React from 'react'
import styled from 'styled-components'

const LeftSide2 = () => {
    return (
        <Section1>
            <Wrap>
                <Part1>
                    <ul>
                        <li>
                            <strong>Range (EPA est.)</strong>
                            <div>333 mi</div>
                        </li>
                        <li>
                            <strong>1/4 Mile</strong>
                            <div>9.9 s</div>
                        </li>
                        <li>
                            <strong>Peak Power</strong>
                            <div>1,020 hp</div>
                        </li>
                        <li>
                            <strong>Wheels</strong>
                            <div>20" or 22"</div>
                        </li>
                        <li>
                            <strong>Towing</strong>
                            <div>5,000 lbs</div>
                        </li>
                        <li>
                            <strong>Seating</strong>
                            <div>Up to 6</div>
                        </li>
                    </ul>
                </Part1>
                <Part2>
                    <ul>
                        <li>
                            <strong>Acceleration</strong>
                            <div>2.5 s 0-60 mph*
                                <br />
                                <em>*with rollout subtracted</em>
                            </div>
                        </li>
                        <li>
                            <strong>Top Speed</strong>
                            <div>163 mph</div>
                        </li>
                        <li>
                            <strong>Drag Coefficient</strong>
                            <div>0.24 Cd</div>
                        </li>
                        <li>
                            <strong>Weight</strong>
                            <div>5,390 lbs</div>
                        </li>
                        <li>
                            <strong>Supercharging Max</strong>
                            <div>250 kW</div>
                        </li>
                    </ul>
                </Part2>
            </Wrap>
        </Section1>
    )
}

export default LeftSide2

const Section1 = styled.div`
padding-top: 24px;
`
const Wrap = styled.div`
display: flex;
`
const Part1 = styled.div`

width: 216px;
padding-right: 24px;
ul li {
    text-align: left;
    color: white;
    margin-bottom: 24px;
    list-style: none;
    font-size: 15px;
    height: 55px;
    strong {
        color: white;
        height: 16px;
    }
    div {
        color: white;
        height: 21px;
    }
}
ul li::before {
    background: white;
    block-size: 1px;
    display: block;
    content: "";
    max-inline-size: 2rem;
    margin-block-end: 0.6rem;
}
`
const Part2 = styled.div`
width: 216px;
ul li {
    text-align: left;
    color: white;
    margin-bottom: 24px;
    list-style: none;
    font-size: 15px;
    strong {
        color: white;
    }
    div {
        color: white;
        em {
            color: white;
        }
    }
}
ul li::before {
    background: white;
    block-size: 1px;
    display: block;
    content: "";
    max-inline-size: 2rem;
    margin-block-end: 0.6rem;
}
`

