import { ProductsContext } from "./ProductsContext"
import { useEffect, useState } from "react";
import {products} from "../data"

const ProductsProvider = ({children}) => {

    const [data, setData] = useState([]);

    const [detail, setDetail] = useState({});

    useEffect(() => {
        setData(products)
    }, []);

    return (
        <ProductsContext.Provider value={{data, detail, setDetail}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider
