import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPE } from "./CartTypes"

const addCartItem =(cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToAdd.id
    )

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const addItemsToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd)
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}

export const removeItemsFromCart = (cartItems, itemToRemoved) => {
    const newCartItems = removeCartItem(cartItems, itemToRemoved)
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)

}

export const clearItemsFromCart = (cartItems, itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear)
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}

export const setIsCartOpen = bool => createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool)
