export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems
        .find((cartItem) => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }
            : cartItem)
    }

    return [
        ...cartItems,
        {
            ...productToAdd,
            quantity: 1
        }
    ]
}

export const removeCartItem = (cartItems, itemToRemoved) => {
    const existingCartItem = cartItems
        .find((cartItem) => cartItem.id === itemToRemoved.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemoved.id)
    }

    return cartItems.map((cartItem) => cartItem.id === itemToRemoved.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1
        }
        : cartItem)
}

export const clearCartItem = (cartItems, itemToClear) => cartItems.filter((cartItem) => cartItem.id !== itemToClear.id)