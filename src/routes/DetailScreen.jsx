import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"
import style from "../styles/detail.module.css"
import "../index.css"

const DetailScreen = () => {
    const {detail, setDetail} = useContext(ProductsContext);
    const {name, price, description, inStock, img} = detail;

    const [valueStock, setValueStock] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const getDetail = JSON.parse(localStorage.getItem("detailView"));
        setDetail(getDetail);
    }, []);

    const handleIncrement = () => (valueStock < inStock) && setValueStock(valueStock + 1);
    const handleDecrement = () => (valueStock > 0)  && setValueStock(valueStock - 1);
    

    return (
        <div className={style.detail}>
            <div className={style.detailSon}>
                <img className={style.imgDetail} src={img} alt="image" />
                <p className="font-black">{name}</p>
                <p className="font-black">{price}</p>
                <p className="font-black py-1">{description}</p>
                <div className={style.containerBtn}>
                    <div>
                        <button className={style.btn} onClick={handleDecrement}>-</button>
                        <button className={`${style.btn} ${style.btnLight}`}>{valueStock}</button>
                        <button className={style.btn} onClick={handleIncrement}>+</button>
                    </div>

                    <div>
                        <button className={`${style.btn} ${style.btnAdd}`}>Agregar al carrito</button>
                    </div>
                </div>

                <button className={`${style.btn} ${style.btnLink}`}
                    onClick={() => navigate(-1)}
                >Volver</button>
                <div className={style.stockText}>
                    <h4>{inStock} unidades disponibles</h4>
                </div>
            </div>
        </div>
    )
}

export default DetailScreen
