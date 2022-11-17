import React, { useContext } from 'react'
import './CartDropdown.style.scss'
import Button from "../button/Button"
import CartItem from "../cart-item/CartItem"
import { CartContext } from "../../contexts/CartContext"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown