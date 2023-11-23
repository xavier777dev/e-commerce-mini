import { Link, NavLink } from "react-router-dom";
import style from "../styles/navBar.module.css";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState("");

    return (
        <nav className={style.nav}>

            <div className={style.react}>
                <Link to="/" className={style.linkReact}>
                    <img className={style.imgReact} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" alt="image react" />
                </Link>
                <Link to="/"><p className={style.paragraphReact}>Compras Z</p></Link>
            </div>

            <ul className={`${style.menu} ${isOpen && style.open}`}>
                <li><NavLink className={style.hoverLine} to="/" 
                    onClick={() => setIsOpen(!isOpen)}
                >Inicio</NavLink></li>
                <li><NavLink className={style.hoverLine} to="/vehicles" 
                    onClick={() => setIsOpen(!isOpen)}
                >Vehículos</NavLink></li>
                <li><NavLink className={style.hoverLine} to="/electronics" 
                    onClick={() => setIsOpen(!isOpen)}
                >Electrónica</NavLink></li>
                <li><NavLink className={style.hoverLine} to="/books" 
                    onClick={() => setIsOpen(!isOpen)}
                >Libros</NavLink></li>
            </ul>

            <div className={`${style.navToogle} ${isOpen && style.open}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a className={`${style.btnBlack} ${style.login} ${isOpen && style.open}`}>Login</a>
        </nav>
    )
}

export default NavBar
