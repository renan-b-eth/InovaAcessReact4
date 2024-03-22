import React from 'react';
import Image from "next/image";
import './header.css';
import Logo from '../img/saleslogo.png'
import BtnHome from '../img/botao-home.png'

const Header = () =>{
    return(
        <>
        <div className="content">
        <header>
        <a href="/"><Image src={Logo} alt="Landscape picture" width={150} height={100} /></a>
        <nav>
            <ul>
                {/*<li><a href="/Produto">Produtos</a></li>*/}
                {/*<li><a href="/Industrias">Indústrias</a></li>*/}
                {/*<li><a href="/Aprendizado">Aprendizado & Recursos</a></li>*/}
                <li><a href="/"><Image src={BtnHome} alt="Home" width={30} height={30} className='posicao-home'/></a></li>
                <li><a href="/Empresa">Empresa</a></li>
                <li><a href="/Suporte">Suporte</a></li>
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