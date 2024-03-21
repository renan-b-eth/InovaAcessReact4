import Footer from "../Footer/page";
import Header from "../Header/page";
import './cardintegrantes.css';
import Image from 'next/image';
import Renan from '../img/fotorenan.jpeg'
import Lucas from '../img/fotolucas2.jpeg'

const CardIntegrantes = () =>{
    return(
        <>
            <main>
                <div className="content-card">
                    <div className="card-integrantes"><Image src={Renan} alt="Landscape picture" width={250} height={250} className='card efeito'/></div>
                    <div className="descricao"><p>RENAN BEZERRA DOS SANTOS RM - 553228</p><br></br><p>DESCRICAO 2</p></div>
                    <div className="card-integrantes"><Image src={Lucas} alt="Landscape picture" width={250} height={250} className='card efeito'/></div>
                    <div className="descricao"><p>LUCAS ALCANTARA RM - 000000</p><br></br><p>DESCRICAO 2</p></div>
                </div>
            </main>
        </>
    )
}
export default CardIntegrantes;