import React from 'react'
import CategoryItem from "../category-item/CategoryItem"
import "./Categories.style.scss"

const CategoriesContainer = ({ categories }) => {
    return (
        <div className="categories-container">
            {
                categories
                    .map((category) => {
                        return <CategoryItem category={category} key={category.id} />
                    })
            }
        </div>
    )
}

export default CategoriesContainer