import { Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomeScreen from "./routes/HomeScreen"
import BooksScreen from "./routes/BooksScreen"
import ElectronicsScreen from "./routes/ElectronicsScreen"
import VehicleScreen from "./routes/VehicleScreen"
import ProductsProvider from "./context/ProductsProvider"
import DetailScreen from "./routes/DetailScreen"

const ShoopApp = () => {
    return (
        <ProductsProvider>
            <NavBar/>

            <Routes>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="/books" element={<BooksScreen/>}></Route>
                <Route path="/electronics" element={<ElectronicsScreen/>}></Route>
                <Route path="/vehicles" element={<VehicleScreen/>}></Route>
                <Route path="/detail" element={<DetailScreen/>}></Route>
                <Route path="/*" element={<Navigate to="/"/>}></Route>
            </Routes>
        </ProductsProvider>
    )
}

export default ShoopApp