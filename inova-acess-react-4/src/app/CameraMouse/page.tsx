import Footer from "../Footer/page";
import Header from "../Header/page";
import './cameramouse.css'
import imagemcamera from '../img/cameramouse.png'
import Image from 'next/image';

const CameraMouse = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-camera-mouse">
                    <h1>Camera Mouse</h1>
                    <div className="content-camera-mouse2">
                        <p>
                        Implantação de um sistema, onde um usuário não precisara usar constantemente o mouse. Através de uma câmera (webcam), ela determinará um ponto focal em seu rosto, para que assim seja feito o movimento do ponteiro do mouse no computador.
                        </p>
                    </div>
                    <div className="content-camera-mouse3">
                    <Image src={imagemcamera} alt="imagemCamera" width={550} height={350} className=''/>
                    </div>
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default CameraMouse;