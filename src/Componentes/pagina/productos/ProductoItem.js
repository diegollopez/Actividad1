import React, {useContext} from "react";
import '../../../Styles/ProducItem.css';
import {Link} from "react-router-dom";
import {DataContext} from "../../DataProvi";

export const ProductoItem = ({title, image, category, mascota, price, id}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    return (

        <div key={id} className="producto">
            <Link to={`/producto/${id}`}>
                <div className="producto__img">
                    <img src={image} alt={title}/>
                </div>
            </Link>
            <div className="producto__footer">
                <h1> {title} </h1>
                <p> {category} </p>
                <p>{mascota}</p>
                <p className="price">${price} </p>
            </div>
            <div className="bottom">
                <buttom onClick={() => addCarrito(id)} className="btn btn-success" >Añadir al carrito</buttom>
                <div>
                    <Link to={`/producto/${id}`} className="btn btn-success">Vista</Link>
                </div>
            </div>
        </div>
    );
};