import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../contexts/UserContext"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/CartIcon"
import CartDropdown from "../../components/cart-dropdown/CartDropdown"
import { CartContext } from "../../contexts/CartContext"
import { LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from "./Navigation.style"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { showDropdown } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser
                            ? (
                                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                            )
                            : (
                                <NavLink to='/auth'>
                                    SIGN IN
                                </NavLink>
                            )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {showDropdown && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation