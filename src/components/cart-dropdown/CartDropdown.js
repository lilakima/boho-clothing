import React from 'react'
import './CartDropdown.style.scss'
import Button from "../button/Button"

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='products-items'></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown