import React from 'react';
import './header.css';

const Header = () =>{
    return(
        <>
        <div className="content">
        <header>
        <h1>Salesforce LOGO</h1>
        <nav>
            <ul>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#industrias">Indústrias</a></li>
                <li><a href="#aprendizado">Aprendizado & Recursos</a></li>
                <li><a href="#suporte">Suporte</a></li>
                <li><a href="#empresa">Empresa</a></li>
                <li><a href="#acessibilidade">Acessibilidade</a></li>
                <li><a href="#integrantes">Integrantes</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    </header>
                </div>
        </>
    )
}
export default Header;