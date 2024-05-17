import React from 'react'
import { Routes, Route } from 'react-router-dom';
import  Inicio  from './pagina/inicio/Inicio';
import {ProductosLista}  from './pagina/productos/Producto';
import {ProductosDetalles} from './pagina/productos/ProductosDetalles';

export const Pagina = () => {
    return(
        <section>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/productos' element={<ProductosLista/>} />
                <Route path='/productos/:id' element={<ProductosDetalles/>} />
            </Routes>
        </section>
    )
}