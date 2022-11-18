import React, { useContext } from 'react'
import './Checkout.style.scss'
import { CartContext } from "../../contexts/CartContext"

const Checkout = () => {
    const { cartItems, addItemsToCart, removeItemsFromCart } = useContext(CartContext)

    return (
        <div>
            <h2>It's checkout page</h2>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const { id, name, quantity } = cartItem

                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br/>
                                <span onClick={() => removeItemsFromCart(cartItem)}>decrement</span>
                                <br/>
                                <span onClick={() => addItemsToCart(cartItem)}>increment</span>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Checkout