import React, { useContext } from 'react'
import './CheckoutItem.style.scss'
import { CartContext } from "../../contexts/CartContext"

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem
    const { addItemsToCart, removeItemsFromCart, clearItemsFromCart } = useContext(CartContext)

    const handleClearItem = () => clearItemsFromCart(cartItem)
    const handleAddItem = () => addItemsToCart(cartItem)
    const handleRemoveItem = () => removeItemsFromCart(cartItem)

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