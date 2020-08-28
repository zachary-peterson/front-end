import React from 'react';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

export const LoadingView = () => {
    return (
        <>
            <ScaleLoader 
                size={50} 
                color={'#ffffff'}
            />
        </>
    )
}