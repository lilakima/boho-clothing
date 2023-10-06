import React, { useContext } from 'react'
import './ProductCard.style'
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"
import { Footer, Name, Price, ProductCartContainer } from "./ProductCard.style"
import { useDispatch, useSelector } from "react-redux"
import { addItemsToCart } from "../../store/cart/CartAction"
import { selectCartItems } from "../../store/cart/CartSelector"

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const handleAddProductToCart = () => dispatch(addItemsToCart(cartItems, product))


    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}
                    onClick={handleAddProductToCart}>
                ADD TO CARD
            </Button>
        </ProductCartContainer>
    )
}

export default ProductCard