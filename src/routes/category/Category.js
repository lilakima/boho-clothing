import { useEffect, useState } from 'react'
import './Category.style.scss'
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card/ProductCard"
import { useSelector } from "react-redux"
import { selectIsLoading, selectCategoriesMap } from "../../store/categories/CategoriesSelector"
import Spinner from "../../components/spinner/Spinner"
// useSelector runs every time that the state object has updated in the route reducer
// it only renders this component if the return of the selector function you pass to it is different
const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {
                isLoading
                    ? <Spinner/>
                    : <div className='category-container'>
                        {
                            products &&
                            products.map((product) => {
                                return <ProductCard key={product.id} product={product} />
                            })
                        }
                      </div>
            }
        </>
    )
}

export default Category