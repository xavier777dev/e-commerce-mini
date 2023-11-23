import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import style from "../styles/card.module.css" 
import Card from "../components/Card";
import ListCategorys from "../components/ListCategorys";

const HomeScreen = () => {

    const {data} = useContext(ProductsContext);
    return (
        <>
            <ListCategorys/>

            <div className={`${style.card} container`}>
                {
                    data.map(product => {
                        return (
                            <Card key={product.id} product={product}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomeScreen