import React, { useState } from 'react'
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/FormInput"
import "./SignInForm.style.scss"
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"

const defaultFormField = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormField()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormField({
            ...formField,
            [name]: value
        })
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button'
                            buttonType={BUTTON_TYPE_CLASSES.google}
                            onClick={signInWithGoogle}>
                        GOOGLE SIGN IN
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm