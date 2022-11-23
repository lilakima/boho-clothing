import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/FormInput"
import "./SignUpForm.style.scss"
import Button from "../button/Button"

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const handleChange = (event) => {
        console.log('test')
        const { name, value } = event.target

        setFormField({
            ...formField,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        console.log('test test')

        event.preventDefault()
        if (password !== confirmPassword) {
            alert('password do not match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormField()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', error)
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name'
                           type="text"
                           onChange={handleChange}
                           name='displayName'
                           value={displayName}
                           required />
                <FormInput label='Email'
                           type="email"
                           onChange={handleChange}
                           name='email'
                           value={email}
                           required />
                <FormInput label='Password'
                           type="password"
                           onChange={handleChange}
                           name='password'
                           value={password}
                           required />
                <FormInput label='Confirm Password'
                           type="password"
                           onChange={handleChange}
                           name='confirmPassword'
                           value={confirmPassword}
                           required />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm