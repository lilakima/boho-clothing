import React from 'react'
import './catagoryItem.style.scss'

const CategoryItem = ({category}) => {
    return (
        <div className="category-container">
            <div className="background-image"
                 style={{ backgroundImage: `url(${category.imageUrl})` }} />
            <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem