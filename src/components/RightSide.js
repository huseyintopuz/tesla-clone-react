import React from 'react'
import styled from 'styled-components'

const RightSide = () => {
    return (
        <Section2>
            <Wrap>
                <Part1>
                    <ul>
                        <li>
                            <strong>Range</strong>
                            <div>405 mi (est.)</div>
                        </li>
                        <li>
                            <strong>Peak Power</strong>
                            <div>670 hp</div>
                        </li>
                        <li>
                            <strong>Wheels</strong>
                            <div>19" or 21"</div>
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <div>28 cu ft</div>
                        </li>
                        <li>
                            <strong>Acceleration</strong>
                            <div>3.1 s 0-60 mph</div>
                        </li>
                    </ul>
                </Part1>
                <Part2>
                    <ul>
                        <li>
                            <strong>Top Speed</strong>
                            <div>155 mph</div>
                        </li>
                        <li>
                            <strong>Drag Coefficient</strong>
                            <div>0.208 Cd</div>
                        </li>
                        <li>
                            <strong>Weight</strong>
                            <div>4,561 lbs</div>
                        </li>
                        <li>
                            <strong>Powertrain</strong>
                            <div>Dual Motor</div>
                        </li>
                        <li>
                            <strong>Supercharging Max</strong>
                            <div>250 kW</div>
                        </li>
                    </ul>
                </Part2>
            </Wrap>
        </Section2>
    )
}

export default RightSide

const Section2 = styled.div`
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
