import React from 'react';
import Draw from '../img/bg.svg';
import { Link } from 'react-router-dom';  

const BodyHome = () => {
    return (
        <main>
            <div className="container-img">
                <img src={Draw} alt="img" />
            </div>
            <div className="container-text">
                <h1 className="title">
                    Se más eficiente <br /> con <i className="brayan">To-Do List</i>
                </h1>
                <p>
                    Bienvenido a To-Do List, tu página ideal para gestionar tus deberes realizados y por realizar.
                    Si no evidencias los resultados, te devolvemos tu dinero. Espera ¿Cuál dinero?
                </p>
                <Link to="/todo-list" className="btn-link">Comenzar</Link>
            </div>
        </main>
    );
}

export default BodyHome;