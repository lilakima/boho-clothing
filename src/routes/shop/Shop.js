import React, { useContext } from 'react'
import { ProductsContext } from "../../contexts/ProductsContext"

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div>
            {
                products.map(({ id, name }) => {
                    return <div key={id}>
                        <h1>{name}</h1>
                    </div>
                })
            }
        </div>
    )
}

export default Shop