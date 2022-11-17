import React, { useContext } from 'react'
import './ProductCard.style.scss'
import Button from "../button/Button"
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product

    const {addItemsToCart} = useContext(CartContext);


    const handleAddProductToCart = () => addItemsToCart(product)


    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={handleAddProductToCart}>ADD TO CARD</Button>
        </div>
    )
}

export default ProductCard