import { createContext, useState } from "react"
import { addCartItem } from "../helpers/CartHelper"

export const CartContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemsToCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { showDropdown, setShowDropdown, cartItems, addItemsToCart }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}