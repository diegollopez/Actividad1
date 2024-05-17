import React from "react";
import '../Styles/App.css';
import {Header} from "./Header";
import { Carrito } from "./Carrito";
import {DataProvi} from "./DataProvi";
import {BrowserRouter as Router} from "react-router-dom";
import {Pagina} from "./Pagina.js";
import 'boxicons';

function App() {
    return (
        <DataProvi>
        <div className="App">
            <Router>
                <Header/>
                <Carrito/>
                <Pagina/>
            </Router>
        </div>
        </DataProvi>
    );
}

export default App;
