import React from 'react';
import Image from "next/image";
import './header.css';
import Logo from '../img/saleslogo.png'

const Header = () =>{
    return(
        <>
        <div className="content">
        <header>
        <Image src={Logo} alt="Landscape picture" width={150} height={100} />
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