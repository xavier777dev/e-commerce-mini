import style from "../styles/navBar.module.css"

const ListCategorys = () => {
    return (
        <>
            <h2 className="text-center my-1">Desde aquí podrás ver un listado de todas las categorías</h2>

            <div className="d-flex w-100">
                <a className={`${style.btnBlack} m-auto`}>Ver artículos sin stock disponibles</a>
            </div>
        </>
    )
}

export default ListCategorys
