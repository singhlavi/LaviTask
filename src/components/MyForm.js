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
// import {useHistory, useParms } from 'react-router-dom'

const MyForm = () => {
       
    const [isEditMode, setMode] = useState(false)
    const user = useSelector(state => state.user)
    const param = useParams();
    
    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({ ...user, [prop]: event.target.value }))
    }
    useEffect(() => {
        
        if(param.id){
            setMode(true)
        }else{
            setMode(false)
        }
    }, [param])
    const handleSubmit = () => {
        user.id === 0 ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } }) : dispatch({ type: UPDATE_USER_BY_ID, user })

        dispatch(setUserSlice({
            id: 0,
            name: '',
            email: '',
            password: '',
            
        }))
    }
 
   
    
    return <>
           <div className=" head">
               <h1> {isEditMode ? 'Edit' : 'Add'} User Details</h1>
            </div> 
               <div className="form">  
            <Input  value={user.id} fullWidth disabled />

            <Input  onChange={handleChange('name')}type="text" placeholder="Enter Name" value={user.name} fullWidth />
            <Input type="email" id="email"  onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth required  />
            <Input  onChange={handleChange('password')}  type="password"placeholder="Enter Password" value={user.password} fullWidth  />
            <Button  onClick={() => handleSubmit()} fullWidth variant="contained" type="submit">Submit</Button>
            </div>
    </>
}
export default MyForm