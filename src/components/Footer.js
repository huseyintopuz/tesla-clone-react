import React from 'react'
import styled from 'styled-components'
import { selectInfos } from '../features/car/footerSlice';
import { useSelector } from 'react-redux';

const Footer = () => {
    const infos = useSelector(selectInfos)
    return (
        <Wrap>
            {infos && infos.map((info, index) => (
                <li>
                    <a key={index} href="#">{info}</a>
                </li>
            ))}
        </Wrap>
    )
}

export default Footer

const Wrap = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    li {
        text-align: left;
        list-style: none;
        margin-right: 14px;
        padding: 8px 0;
        a {
            color: #393c41 !important;
            font-size: 13px;
            font-weight: 600;
            opacity: 0.8;
        }
    }

`
