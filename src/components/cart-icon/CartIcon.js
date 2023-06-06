import React, { useContext } from 'react'
import './CartIcon.style'

import { CartContext } from "../../contexts/CartContext"
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.style"

const CartIcon = () => {
    const {showDropdown, setShowDropdown, cartCount} = useContext(CartContext)

    const handleToggleDropDown = () => setShowDropdown(!showDropdown)

    return (
        <CartIconContainer onClick={handleToggleDropDown}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon