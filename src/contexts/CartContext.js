import { createContext, useEffect, useState } from "react"
import { addCartItem, removeCartItem } from "../helpers/CartHelper"

export const CartContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsFromCart: () => {},
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems
            .reduce((total, cartItem) => {
                return total + cartItem.quantity
            }, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemsFromCart = (itemToRemoved) => {
        setCartItems(removeCartItem(cartItems, itemToRemoved))
    }

    const value = {
        showDropdown,
        setShowDropdown,
        cartItems,
        cartCount,
        addItemsToCart,
        removeItemsFromCart
    }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}