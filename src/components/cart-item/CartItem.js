import React from 'react'

const CartItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity} X {price}</span>
        </div>
    )
}

export default CartItem