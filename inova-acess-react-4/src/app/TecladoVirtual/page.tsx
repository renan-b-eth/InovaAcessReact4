import Footer from "../Footer/page";
import Header from "../Header/page";
import './tecladoVirtual.css'
import imagemteclado from '../img/tecladovirtual.png'
import Image from 'next/image';

const TecladoVirtual = () =>{
    return(
        <>
            <Header></Header>
            <main>
            <div className="content-teclado-virtual">
                    <h1>Teclado Virtual</h1>
                    <div className="content-teclado-virtual2">
                        <p>
                        O Teclado Virtual é uma ferramenta que permite aos usuários inserir texto e comandos usando uma interface visual na tela, em vez de um teclado físico, tornando a interação com o site mais acessível, especialmente para pessoas com limitações de mobilidade.
                        </p>
                    </div>
                    <div className="content-teclado-virtual3">
                    <Image src={imagemteclado} alt="imagemCamera" width={550} height={350} className=''/>
                    </div>
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default TecladoVirtual;