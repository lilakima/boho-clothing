import { Fragment } from 'react'
import { Outlet } from "react-router-dom"
import {useSelector} from "react-redux"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/CartIcon"
import CartDropdown from "../../components/cart-dropdown/CartDropdown"
import { LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from "./Navigation.style"
import { selectCurrentUser } from "../../store/user/UserSelector"
import { selectIsCartOpen } from "../../store/cart/CartSelector"

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
   const isCartOpen = useSelector(selectIsCartOpen)

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
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation