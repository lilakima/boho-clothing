import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CartDropdown.style'
import Button from "../button/Button"
import CartItem from "../cart-item/CartItem"
import { CartDropdownContainer, CartItems, EmptyMessage } from "./CartDropdown.style"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/CartSelector"

const CartDropdown = () => {
    const cartItems  = useSelector(selectCartItems)
    const navigate = useNavigate()

    const handleGoToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        (cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />))
                        : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown