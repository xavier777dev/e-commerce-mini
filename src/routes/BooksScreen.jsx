import { useContext } from "react";
import Card from "../components/Card"
import style from "../styles/card.module.css" 
import { ProductsContext } from "../context/ProductsContext";
import ListCategorys from "../components/ListCategorys";

const BooksScreen = () => {
    const {data} = useContext(ProductsContext);

    return (
        <>
            <ListCategorys/>

            <div className={`${style.card} container`}>
                {
                    data.map(product => {
                        if (product.categoryId == 3) {
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

export default BooksScreen
