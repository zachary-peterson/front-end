import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
    username: '', 
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}

const initialDisabled = true

export default function RegisterStudent() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const regStuFormSchema = yup.object().shape({
        username: yup
            .string()
            .required('Username is Required')
            .length(3, "Must be at least three characters"),
        password: yup
            .string()
            .required('Password is Required')
            .length(8, "Must be at least eight characters")
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
            username: formValues.username.trim(),
            password: formValues.password,
        }
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
                <h2>Log in Now</h2>

                <div className='form-group inputs'>

                    <label>Username:&nbsp;
                        <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'/>
                    </label>
                    <div id="name_error">{errors.username}</div>

                    <label>Password:&nbsp;
                        <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'/>
                    </label>
                    <div id="name_error">{errors.password}</div>
    
                    <button id="submit" disabled={disabled}>Join</button>
                </div>    
            </div>
        </form>
    )
}    

