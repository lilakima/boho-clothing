import React, { useState } from 'react'
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/FormInput"
import "./SignInForm.style.scss"
import Button from "../button/Button"

const defaultFormField = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

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

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormField()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button'
                            buttonType='google'
                            onClick={signInWithGoogle}>
                        GOOGLE SIGN IN
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm