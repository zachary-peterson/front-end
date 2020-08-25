import React from 'react';
import { useHistory } from 'react-router-dom';

export const NavBar = () => {
    const { push } = useHistory();

    return (
        <nav>
            <button onClick={() => push('/')}>Home</button>
            <button onClick={() => push('/dashboard')}>Dashboard</button>
        </nav>
    )
}