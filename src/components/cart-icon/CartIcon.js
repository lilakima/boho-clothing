import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import './CartIcon.style'

import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.style"
import { selectCartCount, selectIsCartOpen } from "../../store/cart/CartSelector"
import { setIsCartOpen } from "../../store/cart/CartAction"

const CartIcon = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)

    const handleToggleDropDown = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        <CartIconContainer onClick={handleToggleDropDown}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon