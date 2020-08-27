import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosWithAuth, setEditing } from '../store';

export const Profile = () => {
    const memberID = useSelector(state => state.landingReducer.memberID);
    const editing = useSelector(state => state.memberReducer.isEditing);
    const [member, setMember] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        axiosWithAuth().get(`api/users/id/${memberID}`)
        .then(res => {
            setMember(res.data.data)
        })
        .catch(err => {
            console.dir(err)
        })

    }, [])

    const handleChanges = e => {
        e.preventDefault()
        setMember({...member, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        axiosWithAuth().put(`api/users/${memberID}`, member)
        .then(res => {
            console.log(res)
            dispatch(setEditing())
        })
        .catch(err => {
            console.dir(err)
        })
    }

    return (
        <div>
            {
                member && editing
                
                ?

                <div>
                    <label htmlFor='first_name'>First Name:</label>
                    <input
                        type='text'
                        name='first_name'
                        value={member['first_name']}
                        onChange={handleChanges}
                    />

                    <label htmlFor='last_name'>Last Name:</label>
                    <input
                        type='text'
                        name='last_name'
                        value={member['last_name']}
                        onChange={handleChanges}
                    />

                    <h3>{member.username}</h3>
                    <h3>{member.email}</h3>

                    <button onClick={handleSubmit} >Submit</button>
                    <button onClick={() => dispatch(setEditing())} >Cancel</button>
                </div> 

                : 
                
                null
            }

            {
                member && !editing 
                
                ? 
                
                <div>
                    <h3>{member['first_name']}</h3>
                    <h3>{member['last_name']}</h3>
                    <h3>{member.username}</h3>
                    <h3>{member.email}</h3>

                    <button onClick={() => dispatch(setEditing())} >Edit Profile</button>
                </div> 
                
                :

                null
            }
        </div>
    )
}