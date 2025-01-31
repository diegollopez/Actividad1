import React, {useContext} from "react";
import '../Styles/Header.css';
import {DataContext} from "./DataProvi";
import {Link} from "react-router-dom";
import Logo from "../Imagenes/Logo.png";

export const Header = () => {
    const value = useContext(DataContext);
    const [carrito] = value.carrito;
    const [menu, setMenu] = value.menu;

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="Logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    );
};