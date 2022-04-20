import React, { useState, useEffect } from 'react';
import Input from "@mui/material/Input"
import main from "../scss/main.css"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { setUserSlice } from "../redux/slice/user"
import { addUserSlice, editUserSlice } from "../redux/slice/users"
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types"
import Divider from "@mui/material/Divider"
import { useParams } from "react-router-dom"
import validation from './validation';
// import {useHistory, useParms } from 'react-router-dom'

const MyForm = () => {

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false)
    const [formisSubmitted, setFormIsSubmitted] = useState(false)
    const [isEditMode, setMode] = useState(false)
    const user = useSelector(state => state.user)
    const param = useParams();



    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {

        dispatch(setUserSlice({ ...user, [prop]: event.target.value }))

    }

    useEffect(() => {

        if (param.id) {
            setMode(true)
        } else {
            setMode(false)
        }
    }, [param])

     const submitForm =() =>{
       setFormIsSubmitted(true);
       setDataIsCorrect(true);
     }
    const handleSubmit = () => {

        user.id === 0 ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } }) : dispatch({ type: UPDATE_USER_BY_ID, user })
        setErrors(validation(user));
        submitForm();
        setDataIsCorrect(true);
        dispatch(setUserSlice({
            id: 0,
            name: '',
            email: '',
            password: '',

        }))
    }


    useEffect(() => {
        if (Object.keys(user).length === 0 && dataIsCorrect) {
            submitForm(true)
        }
    }, [user])


    return <>
        <div className=" head">
            <h1> {isEditMode ? 'Edit' : 'Add'} User Details</h1>
        </div>
        <div className="formsuccess">

            <h1> {!formisSubmitted ? 'submit ' : 'datainvailid'} </h1>
        </div>
        <div className="form">
            <Input value={user.id} fullWidth disabled />

            <Input onChange={handleChange('name')} type="text" placeholder="Enter Name" value={user.name} fullWidth />
            {errors.name && <p className='errors'>{errors.name}</p>}
            <Input type="email" id="email" onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth required />
            {errors.email && <p className='errors'>{errors.email}</p>}
            <Input onChange={handleChange('password')} type="password" placeholder="Enter Password" value={user.password} fullWidth />
            {errors.password && <p className='errors'>{errors.password}</p>}
            <Button onClick={() => handleSubmit()} fullWidth variant="contained" type="submit">Submit</Button>
        </div>
    </>
}
export default MyForm