import React from 'react';
import { Link } from 'react-router-dom';  


const Header = () => {
    return (
        <header>
            <span className="logo">To-Do List</span>
            <nav className="menu">
                <Link to="/">Inicio</Link>
                <Link to="/">Nosotros</Link>
            </nav>
        </header>
    );
}

export default Header;