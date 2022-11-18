import { createContext, useEffect, useState } from "react"
import { addCartItem, clearCartItem, removeCartItem } from "../helpers/CartHelper"

export const CartContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsFromCart: () => {},
    clearItemsFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems
            .reduce((total, cartItem) => {
                return total + cartItem.quantity
            }, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity * cartItem.price
        }, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemsFromCart = (itemToRemoved) => {
        setCartItems(removeCartItem(cartItems, itemToRemoved))
    }

    const clearItemsFromCart = (itemToClear) => {
        setCartItems(clearCartItem(cartItems, itemToClear))
    }

    const value = {
        showDropdown,
        setShowDropdown,
        cartItems,
        cartCount,
        cartTotal,
        addItemsToCart,
        removeItemsFromCart,
        clearItemsFromCart
    }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}