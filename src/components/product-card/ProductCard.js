import React, { useContext } from 'react'
import './ProductCard.style'
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"
import { CartContext } from "../../contexts/CartContext"
import { Footer, Name, Price, ProductCartContainer } from "./ProductCard.style"

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product

    const { addItemsToCart } = useContext(CartContext);


    const handleAddProductToCart = () => addItemsToCart(product)


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