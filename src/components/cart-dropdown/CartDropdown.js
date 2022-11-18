import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './CartDropdown.style.scss'
import Button from "../button/Button"
import CartItem from "../cart-item/CartItem"
import { CartContext } from "../../contexts/CartContext"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const handleGoToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </div>
            <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown