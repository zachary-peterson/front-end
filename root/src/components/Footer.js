import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FootDiv = styled.div`
    display: flex;
    width: 100%;
    margin-top: 5%;
    background-color: #9da7b6;
    color: white;
`

export const Footer = () => {
    return (
        <FootDiv>
            <div><FontAwesomeIcon icon='facebook' size='sm' /></div>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
        </FootDiv>
    )
}