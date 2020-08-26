import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';
import { setAdmin, setStudent, setVolunteer, toggleLanding } from '../store';
import { StyledForm } from './RegisterStudent';



const loginInitialFormValues = {
    username: '', 
    password: '',
}

const loginInitialFormErrors = {
    username: '',
    password: '',
}

const loginInitialDisabled = true

export default function Login() {
    const [formValues, setFormValues] = useState(loginInitialFormValues)
    const [formErrors, setFormErrors] = useState(loginInitialFormErrors)
    const [disabled, setDisabled] = useState(loginInitialDisabled)
    const { push } = useHistory();
    const dispatch = useDispatch();

    const loginFormSchema = yup.object().shape({
        username: yup
            .string()
            .required('Username is Required')
            .min(3, "Must be at least three characters"),
        password: yup
            .string()
            .required('Password is Required')
            .min(8, "Must be at least eight characters")
    })
    
    const loginInputChange = (name, value) => {
        yup
          .reach(loginFormSchema, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: "",
            })
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })
          })
    
        setFormValues({
          ...formValues,
          [name]: value 
        })
    }

    const submit = () => {
        const user = {
            username: formValues.username.trim(),
            password: formValues.password,
        }
        console.log(user)
        axios.post('http://bwschoolinthecloud.herokuapp.com/api/auth/login', user)
        .then(res => {
            if(res.data.role === 'admin'){
                dispatch(setAdmin());
            }else if(res.data.role === 'student'){
                dispatch(setStudent());
            }else if(res.data.role === 'volunteer'){
                dispatch(setVolunteer());
            }

            return res
        })
        .then(res => {
            console.dir(res);
            if (res.status === 200 && res.data) {
                localStorage.setItem('token', res.data.token)
                push('/dashboard')
            }
        })
        .catch(err => {
            console.dir(err)
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onInputChange = evt => {
        const { name, value } = evt.target
        loginInputChange(name, value)
    }

    useEffect(() => {
        console.log(formValues)
        loginFormSchema.isValid(formValues)
            .then(valid => {
                console.log(valid)
                setDisabled(!valid);
            })
    }, [formValues])
    
    return (
        <StyledForm className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Log in Now</h2>

                <div className='form-group inputs'>

                    <label>Username:&nbsp;
                        <input
                        className='field'
                        value={formValues.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'/>
                    </label>
                    <div id="name_error">{formErrors.username}</div>

                    <label>Password:&nbsp;
                        <input
                        className='field'
                        value={formValues.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'/>
                    </label>
                    <div id="name_error">{formErrors.password}</div>
    
                    <div className='select-submit'>
                        <button id="submit" disabled={disabled}>Enter</button>
                        <p>Not a User? <span onClick={() => dispatch(toggleLanding())}>Sign Up</span></p>
                    </div>
                </div>    
            </div>
        </StyledForm>
    )
}    