import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField

    console.log(formField)

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const handleOnChange = (event) => {
        const { name, value } = event.target

        setFormField({
            ...formField,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('password do not match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormField()
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot use email in use')
            } else {
                console.log('user creation encountered an error', error)
            }
        }
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display name</label>
                <input type="text" onChange={handleOnChange} name='displayName' value={displayName} required />
                <label>Email</label>
                <input type="email" onChange={handleOnChange} name='email' value={email} required />
                <label>Password</label>
                <input type="password" onChange={handleOnChange} name='password' value={password} required />
                <label>Confirm password</label>
                <input type="password" onChange={handleOnChange} name='confirmPassword' value={confirmPassword}
                       required />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm