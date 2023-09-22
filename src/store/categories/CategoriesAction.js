// action is for update reducer
import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPE } from "./CategoriesTypes"

export const setCategoriesMap = categories => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categories)