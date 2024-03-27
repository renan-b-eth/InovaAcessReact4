import CardAcessibilidadePrincipal from "../CardAcessibilidadePrincipal/page";
import Footer from "../Footer/page";
import Header from "../Header/page";
import React from 'react';
import Image from "next/image";
import Acess from '../img/acess.png'
import Teclado from '../img/teclado.png'
import Mouse from '../img/webcam.png'
import './acessibilidadecameramouse.css'

const AcessibilidadeCameraMouse = () =>{
    return(
        <>
             <main>
                <div className="content-card2">
                    <div className="card-acessibilidade">
                        <h3>Câmera Mouse</h3>
                        <Image src={Mouse} alt="LogoAcess" width={120} height={120} className="card-acessibilidade2"/>
                        <a href="\CameraMouse" className='acesse'>Acesse</a>
                    </div>
                    <div className="card-acessibilidade">
                        <h3>Teclado Virtual</h3>
                        <Image src={Teclado} alt="LogoAcess" width={120} height={120} className="card-acessibilidade2"/>
                        <a href="\TecladoVirtual" className='acesse'>Acesse</a>
                    </div>
                </div>
            </main>
        </>
    )
}
export default AcessibilidadeCameraMouse;