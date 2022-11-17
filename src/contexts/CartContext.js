import { createContext, useEffect, useState } from "react"
import { addCartItem } from "../helpers/CartHelper"

export const CartContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const newCartCount = cartItems
            .reduce((total, cartItem) => {
                return total + cartItem.quantity
            }, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const value = { showDropdown, setShowDropdown, cartItems, addItemsToCart, cartCount }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}