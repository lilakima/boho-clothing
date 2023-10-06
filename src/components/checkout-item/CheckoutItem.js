import React from 'react'
import './CheckoutItem.style.scss'
import { useDispatch, useSelector } from "react-redux"
import { addItemsToCart, clearItemsFromCart, removeItemsFromCart } from "../../store/cart/CartAction"
import { selectCartItems } from "../../store/cart/CartSelector"

const CheckoutItem = ({ cartItem }) => {
    const cartItems = useSelector(selectCartItems)
    const { imageUrl, name, price, quantity } = cartItem
    const dispatch = useDispatch()

    const handleClearItem = () => dispatch(clearItemsFromCart(cartItems, cartItem))
    const handleAddItem = () => dispatch(addItemsToCart(cartItems, cartItem))
    const handleRemoveItem = () => dispatch(removeItemsFromCart(cartItems, cartItem))

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleRemoveItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleAddItem}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleClearItem}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem