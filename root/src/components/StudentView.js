import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolunteers } from '../store';
import { LoadingView } from './LoadingView';
import styled from 'styled-components';

const StudentDiv = styled.div`
    width: 90%;
    margin: 1% auto;
    background-color: #9da7b6;
    padding-bottom: 50px;
    border: solid 2px #ffffff;

    .wrapper {
        width: 100%;
        display: flex;
    }

    .text {
        font-family: 'Russo One', sans-serif;
    }

    .desc {
        margin: 2% auto;
        background-color: #c1c4d0;
        padding: 2%;
        border-top: 8px solid #e53242;
        border-bottom: 8px solid #e53242;

        h2 {
            font-size: 3rem;
            font-family: 'Russo One', sans-serif;
            margin-bottom: 0;
            text-shadow: 1px 1px #000000;
        }
    }

    .left {
        width: 35%;
        background-color: #e11d2e;
        height: 100%;
        margin: 0 auto;
        font-size: 1.75rem;
        padding: 1%;
        border: solid 2px #ffffff;
        color: #000000;

        li {
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
            text-shadow: 1px 2px #000000;
        }
    }

    .right {
        width: 60%;
        display: flex;
        flex-flow: row wrap;
    }

    .vols {
        background-color: #e6eaf0;
        width: 25%;
        margin: 2% auto;
        padding: 3%;
        border: 2px solid #000000;

        .upper {
            text-transform: uppercase;
        }
    }
`

export const StudentView = () => {
    const volunteers = useSelector(state => state.memberReducer.volunteers);
    const loading = useSelector(state => state.memberReducer.isLoading);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchVolunteers())
    }, [])
    
    return (
        <StudentDiv>
            <div className='spacer'><br/></div>

            <div className='desc'>
                <h2 className='ht'>List of Potential Mentors</h2>
            </div>

            {
                loading ? <div><LoadingView /></div> : null
            }

            <div className='wrapper'>
                <div className='left'>
                    <h2 className='text'>5 TRAITS TO LOOK FOR IN A MENTOR</h2>

                    <ol>
                        <li>A mentor who will empower you to make positive choices.</li>
                        <li> A mentor who encourages you to take ownership in your learning.</li>
                        <li>A mentor who helps you develop life skills.</li>
                        <li> A mentor who will help you develop core values.</li>
                        <li>A mentor who will help you strengthen your interpersonal skills and develop health peer relationships.</li>
                    </ol>
                </div>

                <div className='right'>
                    {
                        !loading && volunteers ? volunteers.map(vol => {
                            return (
                                <div className='vols' key={vol.id} >
                                    <h3 className='text'>Volunteers Username:</h3>
                                    <h3 className='upper'>{vol.username}</h3>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>

        </StudentDiv>
    )
}