import React from 'react'
import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../category/Category"
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import { fetchCategoriesSync } from "../../store/categories/CategoriesAction"

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesSync())
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop