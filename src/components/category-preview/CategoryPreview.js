import React from 'react'
import './CategoryPreview.style.scss'
import ProductCard from "../product-card/ProductCard"

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
            {
                products
                    .filter((_, idx) => idx < 4)
                    .map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
            }
            </div>
        </div>
    )
}

export default CategoryPreview