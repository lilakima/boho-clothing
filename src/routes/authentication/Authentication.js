import React from 'react'
import SignUpForm from "../../components/sign-up-form/SignUpForm"
import SignInForm from "../../components/sign-in-form/SignInForm"



const Authentication = () => {
    return (
        <div>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication