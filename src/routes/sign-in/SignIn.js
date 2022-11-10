import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/SignUpForm"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }


    return (
        <div>
            <h1>I am Sign In page</h1>
            <button onClick={logGoogleUser}>Sign In with Google popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn