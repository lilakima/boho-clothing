import React, { useContext } from 'react'
import './CartIcon.style.scss'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/CartContext"

const CartIcon = () => {
    const {showDropdown, setShowDropdown, cartCount} = useContext(CartContext)

    const handleToggleDropDown = () => setShowDropdown(!showDropdown)

    return (
        <div className='cart-icon-container' onClick={handleToggleDropDown}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon