import React from 'react';
import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import styled from 'styled-components';

const overide = css`
    display: block;
    margin: 20% auto;
    border-color: red;
`;

export const LoadingView = () => {
    return (
        <>
            <ScaleLoader 
                size={50} 
                css={overide} 
                color={'#ffffff'}
            />
        </>
    )
}