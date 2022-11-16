import React, { useContext, useState } from 'react'
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/FormInput"
import "./SignInForm.style.scss"
import Button from "../button/Button"
import { UserContext } from "../../contexts/UserContext"

const defaultFormField = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField

    const { setCurrentUser } = useContext(UserContext)

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormField()
            setCurrentUser(user)
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

    const handleOnChange = (event) => {
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