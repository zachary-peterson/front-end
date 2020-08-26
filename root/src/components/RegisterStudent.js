import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

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

    const regStuFormSchema = yup.object().shape({
        email: yup
            .string()
            .required('Email is Required'),
        username: yup
            .string()
            .required('Username is Required')
            .length(3, "Must be at least three characters"),
        // first_name: yup
        //     .string()
        //     .required('First Name is Required')
        //     .length(3, "Must be at least three characters"),
        // last_name: yup
        //     .string()
        //     .required('Last Name is Required')
        //     .length(3, "Must be at least three characters"),
        password: yup
            .string()
            .required('Password is Required')
            .length(8, "Must be at least eight characters"),
        role: yup
            .string()
            .oneOf(['admin', 'medium', 'large', 'sheet'], 'Size selection required'),
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
            // first_name: formValues.first_name.trim(),
            // last_name: formValues.last_name.trim(),
            password: formValues.password,
            role: formValues.role
        }
        axios.post('http://bwschoolinthecloud.herokuapp.com/api/auth/register', formValues)
        .then(res => {
            console.log(res)
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
        inputChange(name, value)
    }

    useEffect(() => {
        console.log(formValues)
        regStuFormSchema.isValid(formValues)
            .then(valid => {
                console.log(valid)
                setDisabled(!valid);
            })
    }, [formValues])
    
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Register Now</h2>

                <div className='form-group inputs'>
                    <label>Email:&nbsp;
                        <input
                        value={formValues.email}
                        onChange={onInputChange}
                        name='email'
                        type='email'/>
                    </label>
                    <div id="name_error">{formErrors.email}</div>

                    <label>Username:&nbsp;
                        <input
                        value={formValues.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'/>
                    </label>
                    <div id="name_error">{formErrors.username}</div>

                    {/* <label>First Name:&nbsp;
                        <input
                        value={formValues.first_name}
                        onChange={onInputChange}
                        name='first_name'
                        type='text'/>
                    </label>
                    <div id="name_error">{formErrors.first_name}</div>

                    <label>Last Name:&nbsp;
                        <input
                        value={formValues.last_name}
                        onChange={onInputChange}
                        name='last_name'
                        type='text'/>
                    </label>
                    <div id="name_error">{formErrors.last_name}</div> */}

                    <label>Password:&nbsp;
                        <input
                        value={formValues.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'/>
                    </label>
                    <div id="name_error">{formErrors.password}</div>

                    <label>Role
                    <select
                        onChange={onInputChange}
                        value={formValues.role}
                        name='role'
                    >
                        <option value=''>- Select -</option>
                        <option value='admin'>Admin</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                    </label>
                    
    
                    <button id="submit" disabled={disabled}>Join</button>
                </div>    
            </div>
        </form>
    )
}    