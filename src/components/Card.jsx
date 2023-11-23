import { NavLink } from "react-router-dom";
import style from "../styles/card.module.css" 
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Card = ({product}) => {
    const {name, img, description, inStock} = product;

    const {setDetail} = useContext(ProductsContext);

    const handleDetail = () => {
        setDetail(product);
        localStorage.setItem("detailView", JSON.stringify(product))
    }
    
    return (
        <div className={style.item}>
            <div className={`${style.paragraphStart} center-item`}>
                <h4 >{name}</h4>
            </div>
            <div className={style.imgText}>
                <img src={img} alt="image" />
                <p className={style.description}>{description}</p>
            </div>
            <NavLink to="/detail" className={`${style.viewDetail} center-item`}
                onClick={handleDetail}
            >
                <h4 >Ver detalle del producto</h4>  
            </NavLink>
            <div className={`${style.paragraphEnd} center-item`}>
                <p >Stock disponible: {inStock}</p>
            </div>
        </div>
    )
}

export default Card
