import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

function Session() {
    const [sessionInfo, setSessionInfo] = useState({})

    useEffect(()=>{
        axiosWithAuth()
            .get('api/users')
            .then((response)=>{
                console.log(response);
                setSessionInfo(response.data.data);
            })
            .catch((error)=>{
                console.log('Error: ', error);
            });
    }, [sessionInfo.length] )
    
    const usersInSession = sessionInfo.length

    return(
        <div>
            <p>There are currently {usersInSession} users.</p>
        </div>
    )
}

export default Session;