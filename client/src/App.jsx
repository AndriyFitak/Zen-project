import Basket from '../src/Components/Basket/Basket'
import MainPage from '../src/pages/main'
import PlaceAnOrder from './Components/PlaceAnOrder/PlaceAnorder';
import YourOrders from './Components/YourOrders/YourOrders';

import { BrowserRouter, Routes, Route}  from"react-router-dom"
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>

            <Route path="/basket" element={
                <Basket/>
            }/>

            <Route path="/placeAnOrder" element={
                <PlaceAnOrder/>
            }/>
            <Route path="/yourOrders" element={
                <YourOrders/>
            }/>
            
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;