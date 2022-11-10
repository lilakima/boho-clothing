import React from 'react'
import { createUserDocumentFromAuth, SignInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>I am Sign In page</h1>
            <button onClick={logGoogleUser}>Sign In with Google popup</button>
        </div>
    )
}

export default SignIn