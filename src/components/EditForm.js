import React, { useState, useEffect } from 'react';
import Input from "@mui/material/Input"
import main from "../sass/main.css"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { setUserSlice } from "../redux/slice/user"
import { addUserSlice, editUserSlice } from "../redux/slice/users"
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_USER, UPDATE_USER_BY_ID, GET_USER_BY_ID } from "../redux/types"
import Divider from "@mui/material/Divider"
import { useParams } from "react-router-dom"
import * as Yup from 'yup';
import { Formik, Field, Form, } from "formik";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


const EditForm = () => {
    const [isEditMode, setMode] = useState(false)
    let user = useSelector(state => {
        console.log('----', state.user)
        state.user
    })
    const userDetails = useSelector(state => state.user)

    const param = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (param.id) {
            const id = param.id
            dispatch({ type: GET_USER_BY_ID, id })
            setMode(true)
        } else {
            setMode(false)
        }
    }, [param.id])

    useEffect(() => {
        console.log('user========', userDetails)
    }, [userDetails])





    return <>
        <div className=" head">
            <h1> Edit User Details</h1>
        </div>


        <Formik

            initialValues={{
                id: "",
                name: userDetails.name,
                email: userDetails.email,
                password: userDetails.password
            }}
            validationSchema={SignupSchema}
             onSubmit={(values, { setSubmitting }) => {

                console.log('values>>>>>>>>', values)
                user.id === 0 ? dispatch({ type: CREATE_USER, user: { ...values, id: nanoid(8) } }) : dispatch({ type: UPDATE_USER_BY_ID, user })

                dispatch(setUserSlice({
                    id: 0,
                    name: "",
                    email: "",
                    password: ""

                }))

                // handleSubmit(values)
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);

            }}
        >
            {({
                errors,
                touched,
                isEditMode,
                handleSubmit,
                handleChange,
                isSubmitting,
                values
            }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="form">
                        <Field value={userDetails.id} name="id" />

                        <Field
                            onChange={handleChange('name')}
                            type="text"
                            placeholder="Enter Name"
                            value={userDetails.name}
                            name="name"
                            
                        />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}


                        <Field
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange('email')}
                            placeholder="Enter Email"
                            value={userDetails.email}

                        />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}

                        <Field
                            onChange={handleChange('password')}
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={userDetails.password}

                        />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}

                        <Button
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            )}

        </Formik>
    </>
}
export default EditForm