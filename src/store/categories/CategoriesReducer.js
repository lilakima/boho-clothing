import { CATEGORIES_ACTION_TYPE } from "./CategoriesTypes"

export const CATEGORIES_INITIAL_STATE = {
    categories: {}
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action={}) => {
    const {type, payload} = action

    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
            return {
                ...state,
                categories: payload
            }
        default:
            return state
    }
}