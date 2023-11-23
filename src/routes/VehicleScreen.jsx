import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import Card from "../components/Card";
import style from "../styles/card.module.css" 
import ListCategorys from "../components/ListCategorys";

const VehicleScreen = () => {

    const {data} = useContext(ProductsContext);

    return (
        <>
            <ListCategorys/>

            <div className={`${style.card} container`}>
                {
                    data.map(product => {
                        if (product.categoryId == 1) {
                            return (
                                <Card key={product.id} product={product}/>
                            )
                        }
                    })

                }
            </div>
        </>
    )
}

export default VehicleScreen