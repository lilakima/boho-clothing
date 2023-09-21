import { createContext, useReducer } from "react"
import { addCartItem, clearCartItem, removeCartItem } from "../helpers/CartHelper"
import {createAction} from "../utils/reducer/reducer.utils"

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsFromCart: () => {},
    clearItemsFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CART_ACTION_TYPE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }

        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const {isCartOpen, cartItems, cartCount, cartTotal} = state

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => {
                return total + cartItem.quantity
            }, 0)

        const newCartTotal = newCartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity * cartItem.price
        }, 0)

        dispatch(
            createAction(CART_ACTION_TYPE.SET_CART_ITEMS,{
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            })
        )
    }

    const addItemsToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems,productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemsFromCart = (itemToRemoved) => {
        const newCartItems = removeCartItem(cartItems, itemToRemoved)
        updateCartItemsReducer(newCartItems)

    }

    const clearItemsFromCart = (itemToClear) => {
        const newCartItems = clearCartItem(cartItems, itemToClear)
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartCount,
        cartTotal,
        addItemsToCart,
        removeItemsFromCart,
        clearItemsFromCart
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}