import React from 'react';
import Brayan from '../img/brayan.jpg';
import Jacobo from '../img/jacobo.jpg';

const Header = () => {
    return (
        <header>
            <span className="logo">To-Do List</span>
            <div>
                <a target="blank" href="https://github.com/brayangomez22"><img src={Brayan} alt="img_Jacobo" className="photo"></img></a>
                <a target="blank" href="https://github.com/JacoboGarcesO"><img src={Jacobo} alt="img_Brayan" className="photo"></img></a>
            </div>
            <nav className="menu">
                <a target="blank" href="https://github.com/JacoboGarcesO/KATA_REFACTORIZANDO_CRUD">Repositorio</a>
            </nav>
        </header>
    );
}

export default Header;