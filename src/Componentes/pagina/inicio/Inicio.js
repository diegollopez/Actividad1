import React from 'react'
import '../../../Styles/Inicio.css';
import {Link} from "react-router-dom";
import Portada from "../../../Imagenes/Portada.jpg";

export default function Inicio() {
    return (
        <div className="inicio">
            <br/>
            <Link to="/">
                <h1>home</h1>
            </Link>
            <Link to="/productos">
                <h1>Productos</h1>
            </Link>
            <img src={Portada} alt=""/>
        </div>
    )
}