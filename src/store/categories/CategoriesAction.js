// action is for update reducer
import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPE } from "./CategoriesTypes"

export const fetchCategoriesStart = () => createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START
)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
)

export const fetchCategoriesFailed = (error) => createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
    error
)


