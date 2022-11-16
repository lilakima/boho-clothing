import React, { useContext, useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/FormInput"
import "./SignUpForm.style.scss"
import Button from "../button/Button"
import { UserContext } from "../../contexts/UserContext";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField

    const { setCurrentUser } = useContext(UserContext)

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
            await createUserDocumentFromAuth(user, { displayName })
            setCurrentUser(user)
            resetFormField()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot use email in use')
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
                <FormInput label='displayName'
                           type="text"
                           onChange={handleOnChange}
                           name='displayName'
                           value={displayName}
                           required />
                <FormInput label='email'
                           type="email"
                           onChange={handleOnChange}
                           name='email'
                           value={email}
                           required />
                <FormInput label='password'
                           type="password"
                           onChange={handleOnChange}
                           name='password'
                           value={password}
                           required />
                <FormInput label='confirmPassword'
                           type="password"
                           onChange={handleOnChange}
                           name='confirmPassword'
                           value={confirmPassword}
                           required />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm