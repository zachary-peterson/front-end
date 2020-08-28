import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingView } from './LoadingView';
import { fetchTasks, toggleViewMember, toggleViewTasks } from '../store';
import styled from 'styled-components';

const VolDiv = styled.div`
    width: 90%;
    margin: 1% auto;
    background-color: #9da7b6;
    padding-bottom: 50px;
    border: solid 2px #ffffff;

    .top {
        background-color: #e6eaf0;
        margin: 1% auto;
        padding: 2.5% 0;
        
        h2 {
            font-size: 3.5rem;
            font-family: 'Russo One', sans-serif;
            margin: 0 auto;
            padding: 1% 5%;
            width: 100%;
        }
    }

    .bot {
        display: flex;
        flex-flow: row wrap;
        margin: 2% auto;
        width: 100%;
        overflow-x: hidden;

        .tasks {
            font-size: 1.5rem;
            width: 45%;
            margin: 1% auto;
            background-color: #e6eaf0;
            padding: 3% 0; 
            font-family: 'Alata', sans-serif;
            border: solid 2px #000000;

            h3 {
                font-size: 3rem;
                text-transform: uppercase;
            }
        }
    }

    .but {
        margin-left: 70%;
        padding: 2%;
        font-size: 1.5rem;
        background-color: #545454;
        color: #e53242;
        font-family: 'Russo One', sans-serif;
        border: 2px solid #ffffff;

        &:hover {
            background-color: #7a7a7a;
        }
    }

    .hold {
        padding: 1.5% 0;
        width: 90%;
        margin: 1% auto;
        font-size: 2.25rem;
        background-color: #383838;

        ul {
            width: 90%;
            margin: 0 auto;
            color: 	#e6eaf0;
            font-family: 'Alata', sans-serif;
            font-size: 2.5rem;
            line-height: 5rem;
        }
        
        .big {
            font-size: 4rem;
            font-family: 'Russo One', sans-serif;
            color: #e53242;
            text-shadow: 2px 2px #000000;
        }
    }
`


export const VolunteerView = () => {
    const tasks = useSelector(state => state.memberReducer.tasks);
    const loading = useSelector(state => state.memberReducer.isLoading);
    const taskView = useSelector(state => state.adminReducer.taskView);
    const memberView = useSelector(state => state.adminReducer.memberView);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())

    }, [])

    return (
        <VolDiv>
            <div className='spacer'><br/></div>

            {
                loading ? <div><LoadingView /></div> : null
            }

            <div>
                {
                    !loading && memberView && tasks ? 
                    
                    <div>
                        <div>
                            <button className='but' onClick={() => dispatch(toggleViewTasks())}>Mentor Resources</button>
                        </div>
                            <div className='top'>
                        <h2>Tasks that need <em>your</em> help completing...</h2>
                        
                    </div>
                    <div className='bot'>
                    {tasks.map(task => {
                        return (
                            <div className='tasks' key={task.id} >
                                {/* <h2>Task Title:</h2> */}
                                <h3 className='upp'>{task.title}</h3>
                                {/* <h4>Task Descirption:</h4> */}
                                <p>{task.description}</p>
                            </div>
                        )
                    })}
                    </div>
                    
                    </div>
                    
                    : 
                    
                    null
                }
                
                { !loading && taskView ?
                    <div className='hold'>

                        <div>
                            <button className='but' onClick={() => dispatch(toggleViewMember())}>View Mentee's Tasks</button>
                        </div>

                    <h3 className='big'>Questions to ask yourself as a mentor...</h3>

                        <ul>
                            <li>What kind of manager style do you naturally have/want?</li>
                            <li>What expectations will you set in regards to your style and how best to work with you?</li> 
                            <li>How will you know when your mentee is successful?</li>
                            <li>How will you communicate what success looks like to him/her?</li>
                            <li>What do you hope your mentee’s development looks like over the course of your mentorship?</li>
                            <li>How can you segment out his/her experience into phases to get to that point?</li>
                            <li>How will you use one-on-one time?</li>
                            <li>How will you explain your expectations for one-on-one meetings (if applicable) so you’re on the same page? </li>
                        </ul>

                </div>

                :null
                }

            </div>
        </VolDiv>
    )
}