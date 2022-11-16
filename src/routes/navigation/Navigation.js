import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from "react-router-dom"
import './Navigation.style.scss'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutUserHandler = async() => {
        await signOutUser()
        setCurrentUser(null)
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser
                            ? (
                                <span className='nav-link' onClick={signOutUserHandler}>SIGN OUT</span>
                            )
                            : (
                                <Link className='nav-link' to='/auth'>
                                    SIGN IN
                                </Link>
                            )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation