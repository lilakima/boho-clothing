import {all, call} from 'redux-saga/effects'
import { categoriesSaga } from "./categories/CategoriesSaga"

export function* rootSaga() {
yield all([call(categoriesSaga)])
}