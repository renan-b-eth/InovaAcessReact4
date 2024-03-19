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
                <li><a href="/Produto">Produtos</a></li>
                <li><a href="/Industrias">Indústrias</a></li>
                <li><a href="/Aprendizado">Aprendizado & Recursos</a></li>
                <li><a href="/Suporte">Suporte</a></li>
                <li><a href="/Empresa">Empresa</a></li>
                <li><a href="/Acessibilidade">Acessibilidade</a></li>
                <li><a href="/Integrantes">Integrantes</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
        </nav>
    </header>
                </div>
        </>
    )
}
export default Header;