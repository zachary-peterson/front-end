import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const Test = () => {
    
    useEffect(() => {
        axiosWithAuth().get('api/sesssions').then().catch()
    }, [])

    return (
        <div className="uk-section">

        </div>
    )
}