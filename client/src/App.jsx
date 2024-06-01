import Basket from '../src/Components/Basket/Basket'
import MainPage from '../src/pages/main'
import PlaceAnOrder from './Components/PlaceAnOrder/PlaceAnorder';
import YourOrders from './Components/YourOrders/YourOrders';
import Information from './Components/Information/Information';

import { BrowserRouter, Routes, Route}  from"react-router-dom"

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

            <Route path="/information" element={
                <Information/>
            }/>
            
        </Routes>

        </BrowserRouter>
        </>
    )
}

export default App;