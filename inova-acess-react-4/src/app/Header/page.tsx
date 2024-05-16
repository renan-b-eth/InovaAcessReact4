import React from 'react';
import Image from "next/image";
import './header.css';
import Logo from '../img/saleslogo.png'
import BtnHome from '../img/botao-home.png'
import VLibras from '../VLibras/page';
import MenuRapidoAcessivel from '../MenuRapidoAcessivel/page';

const Header = () =>{
    return(
        <>
        
        <VLibras></VLibras>
        <div className="content">
        <header>
        <a href="/"><Image src={Logo} alt="Landscape picture" width={150} height={100} /></a>
        <nav>
            <ul className="menor">
                <li className="menor2"><a href="/"><Image src={BtnHome} alt="Home" width={30} height={30} className='posicao-home'/></a></li>
                <li><a href="/Empresa">Empresa</a></li>
                <li><a href="/Acessibilidade">Acessibilidade</a></li>
                <li><a href="/Integrantes">Integrantes</a></li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/Cadastro">Cadastro</a></li>
                <li><a href="/AcessoRapido">Acesso rapido</a>
                    <select>
                        <option>Acessibilidade</option>
                        <option>Acessibilidade 2</option>
                        <option>Acessibilidade 3</option>
                    </select>
                </li>
            </ul>
        </nav>
    </header>
                </div>
        </>
    )
}
export default Header;