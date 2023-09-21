import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Routes, Route } from "react-router-dom"
import './components/directory/Directory.style.scss'
import Home from "./routes/home/Home"
import Navigation from "./routes/navigation/Navigation"
import Authentication from "./routes/authentication/Authentication"
import Shop from "./routes/shop/Shop"
import Checkout from "./routes/checkout/Checkout"
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils"
import { setCurrentUser } from "./store/user/UserAction"

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            dispatch(setCurrentUser(user))
        })

        return unsubscribe
    }, [dispatch])

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    )
}

export default App
