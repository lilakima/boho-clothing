import React, { useState } from 'react'

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formField

    const handleOnChange = (event) => {
        const {name, value} = event.target

        setFormField({
            ...formField,
            [name]: value
        })
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label>Display name</label>
                <input type="text" onChange={handleOnChange} name='displayName' value={displayName} required />
                <label>Email</label>
                <input type="email" onChange={handleOnChange} name='email' value={email} required />
                <label>Password</label>
                <input type="password" onChange={handleOnChange} name='password' value={password} required />
                <label>Confirm password</label>
                <input type="password" onChange={handleOnChange} name='confirmPassword' value={confirmPassword} required />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm