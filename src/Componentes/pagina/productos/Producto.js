import React, {useContext} from 'react'
import '../../../Styles/Producto.css';
import {DataContext} from "../../DataProvi";
import {ProductoItem} from "./ProductoItem";

export const ProductosLista = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    return (
        <>
            <h1 className="produ">PRODUCTOS</h1>
            <div className="productos">
                {
                    productos.map(producto => (
                        <ProductoItem
                            key={producto.id}
                            title={producto.title}
                            image={producto.image}
                            category={producto.category}
                            mascota={producto.mascota}
                            price={producto.price}
                            id={producto.id}
                        />
                    ))
                }
            </div>
        </>
    )
}
