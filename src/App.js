import { Routes, Route } from "react-router-dom"
import './components/categories-container/categories.style.scss'
import Home from "./routes/home/Home"

const App = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home />}></Route>
        </Routes>
    )
}

export default App
