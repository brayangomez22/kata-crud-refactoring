import React from 'react';
import brayan from '../img/brayan.jpg';
import jacobo from '../img/jacobo.jpg';

const Header = () => {
    return (
        <header>
            <span className="logo">To-Do List</span>
            <div>
                <a target="blank" href="https://github.com/brayangomez22"><img src={brayan} className="photo"></img></a>
                <a target="blank" href="https://github.com/JacoboGarcesO"><img src={jacobo} className="photo"></img></a>
            </div>
            <nav className="menu">
                <a target="blank" href="https://github.com/JacoboGarcesO/KATA_REFACTORIZANDO_CRUD">Repositorio</a>
            </nav>
        </header>
    );
}

export default Header;