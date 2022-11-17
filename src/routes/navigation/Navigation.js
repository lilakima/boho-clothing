import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from "react-router-dom"
import './Navigation.style.scss'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../contexts/UserContext"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/CartIcon"
import CartDropdown from "../../components/cart-dropdown/CartDropdown"
import { CartContext } from "../../contexts/CartContext"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { showDropdown } = useContext(CartContext)

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
                                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                            )
                            : (
                                <Link className='nav-link' to='/auth'>
                                    SIGN IN
                                </Link>
                            )
                    }
                    <CartIcon />
                </div>
                {showDropdown && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation