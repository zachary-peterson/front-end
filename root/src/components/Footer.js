import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const FootDiv = styled.div`
    display: flex;
    bottom: 0;
    margin: auto;
    width: 97%;
    position: absolute;
    background-color: #9da7b6;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    padding: 1.5%;

    div {
        background-color: #065A82;
        margin: 0 2%;
        padding: .5% 1%;
        border-radius: 5px;
        transition: .25s ease-in-out;

        &:hover {
            background-color: #087cb3;
        }
    }
`

export const Footer = () => {
    return (
        <FootDiv>
            <div><FaFacebook /></div>
            <div><FaTwitter /></div>
            <div><FaInstagram /></div>
        </FootDiv>
    )
}