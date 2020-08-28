import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanding, setLoading, loadingRes, setErrors } from '../store';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';
import { LoadingView } from '../components/LoadingView';

export const StyledForm = styled.form`
    width: 100%;
    font-family: 'Arial';
    font-size: 62.5%;
    font-size: 1rem;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content:center;
    transition: 0.3s all ease-in-out;
    align-items: center;
    h2{
        text-align:center;
    }
    .field {
        width: stretch;
        height: 5vh;
        padding: 0 1rem;
        margin: 1vh 0;
        border: 0px;
        border-radius: 10%;
        line-height: normal;
        background-color: rgba(255, 255, 255, 0.7);
        color: #282828;
        box-shadow: 0px 4px 20px 0px transparent;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    }
    label.field input.field {
        font-weight: 600;
        line-height: 1.5rem;
        color: #ffffff;
        opacity: 0;
        transition: 0.1s all ease-in-out;
    }
    .field:hover {
        background-color: rgba(255, 255, 255, 0.45);
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
        transform: scale(1.1) ;
    }
    .error{
        text-align:center;
        padding: 1vh;
        font-size: 0.8rem;
        color: grey;
        letter-spacing: 0.5px;
        font-weight:bold;
    }   
    .select-submit{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        button{
            padding: 0.25rem 1rem;
            font-size: 1rem;
        }
    }
`

const initialFormValues = {
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    role: ''
}

const initialFormErrors = {
    email: '',
    username: '',
    first_name: '',
    last_name: '', 
    password: '',
    role: ''
}

const initialDisabled = true

export default function RegisterStudent() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const signUp = useSelector(state => state.landingReducer.isSignUp);
    const loading = useSelector(state => state.memberReducer.isLoading);
    const error = useSelector(state => state.memberReducer.error);
    const dispatch = useDispatch();

    const regStuFormSchema = yup.object().shape({
        email: yup
            .string()
            .email('Must be a valid email')
            .required('Email is Required'),
        username: yup
            .string()
            .required('Username is Required')
            .min(3, "Must be at least three characters"),
        first_name: yup
            .string()
            .required('First Name is Required')
            .min(3, "Must be at least three characters"),
        last_name: yup
            .string()
            .required('Last Name is Required')
            .min(3, "Must be at least three characters"),
        password: yup
            .string()
            .required('Password is Required')
            .min(8, "Must be at least eight characters"),
        role: yup
            .string()
            .oneOf(['admin', 'volunteer', 'student'], 'Selection required'),
    })
    
    const inputChange = (name, value) => {
        yup
          .reach(regStuFormSchema, name)
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
        const newStudent = {
            email: formValues.email.trim(),
            username: formValues.username.trim(),
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            password: formValues.password,
            role: formValues.role
        }
        dispatch(setLoading())
        axios.post('https://bwschoolinthecloud.herokuapp.com/api/auth/register', formValues)
        .then(res => {
            // console.log(res)
            dispatch(loadingRes())
            dispatch(toggleLanding())
        })
        .catch(err => {
            // console.dir(err)
            dispatch(setErrors(err))
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    useEffect(() => {
        // console.log(formValues)
        regStuFormSchema.isValid(formValues)
            .then(valid => {
                // console.log(valid)
                setDisabled(!valid);
            })
    }, [formValues])
    
    return (
        <div>
            {   loading ? <LoadingView /> :
                <StyledForm className='form container' onSubmit={onSubmit}>
                    <div className='form-group submit'>
                        <h2>Sign Up</h2>

                        <div className='form-group inputs'>
                            <label>Email:&nbsp;
                                <input 
                                className="field"
                                value={formValues.email}
                                onChange={onInputChange}
                                name='email'
                                type='email'/>
                            </label>
                            <div className="error" id="name_error">{formErrors.email}</div>

                            <label>Username:&nbsp;
                                <input
                                className="field"
                                value={formValues.username}
                                onChange={onInputChange}
                                name='username'
                                type='text'/>
                            </label>
                            <div className="error" id="username_error">{formErrors.username}</div>

                            <label>First Name:&nbsp;
                                <input
                                className="field"
                                value={formValues.first_name}
                                onChange={onInputChange}
                                name='first_name'
                                type='text'/>
                            </label>
                            <div id="first_name_error">{formErrors.first_name}</div>

                            <label>Last Name:&nbsp;
                                <input
                                className="field"
                                value={formValues.last_name}
                                onChange={onInputChange}
                                name='last_name'
                                type='text'/>
                            </label>
                            <div id="last_name_error">{formErrors.last_name}</div>

                            <label>Password:&nbsp;
                                <input
                                className="field"
                                value={formValues.password}
                                onChange={onInputChange}
                                name='password'
                                type='password'/>
                            </label>
                            <div className="error" id="password_error">{formErrors.password}</div>

                            <div className = "select-submit">
                            <label>Role
                                <select
                                    className="field"
                                    onChange={onInputChange}
                                    value={formValues.role}
                                    name='role'
                                >
                                    <option value=''>- Select -</option>
                                    <option value='admin'>Admin</option>
                                    <option value='student'>Student</option>
                                    <option value='volunteer'>Volunteer</option>
                                </select>
                            </label>
                            <div className="error" id="role_error">{formErrors.role}</div>
                            
                            { 
                                error ? <div>INVALID USERNAME/PASSWORD<br/> Please try again...</div> : null
                            }
                            
                            <button id="submit" disabled={disabled}>Join</button>
                            <p>Already a User? <span onClick={() => dispatch(toggleLanding())}>Sign In</span></p>
                            </div>
                        </div>    
                    </div>
                </StyledForm>
            }

            
        </div>
    )
}    