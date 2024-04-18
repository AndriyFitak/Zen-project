import Header from '../src/Components/Header/Header'

import MainPage from '../src/pages/main'
import { BrowserRouter, Routes, Route}  from"react-router-dom"

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App