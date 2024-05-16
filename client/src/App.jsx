import Header from '../src/Components/Header/Header'
import Basket from '../src/Components/Basket/Basket'
import MainPage from '../src/pages/main'
import { BrowserRouter, Routes, Route}  from"react-router-dom"
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
            <Route path="/basket" element={
                <Basket/>
            }>
            

            </Route>
            
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App