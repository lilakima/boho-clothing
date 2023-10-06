import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import {Provider} from "react-redux"
import { persistor, store } from "./store/store"
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)

reportWebVitals()
