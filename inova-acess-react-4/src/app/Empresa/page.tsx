import Image from "next/image";
import "./empresa.css";
import Footer from "../Footer/page";
import Header from "../Header/page";
import Sobre from "../img/sobre.png"

const Empresa = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-empresa">
                    <h1>O que é a Salesforce?</h1>
                    <p>A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. 
                        É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.
                    </p>
                <div className="container-imagem">
                    <Image src={Sobre} alt="Sobre Imagem" className="sobre-imagem" />
                </div>
                <h2>Juntos, conectamos as empresas aos seus clientes</h2>
                <p>Por que usar Salesforce?</p>
                <ul className="lista-pqs">
                    <li className="lista-item">Atraia mais compradores com uma estratégia de marketing personalizada.</li>
                    <li className="lista-item">Conquiste mais clientes conhecendo suas necessidades e preocupações.</li>
                    <li className="lista-item">Atenda às expectativas dos seus clientes oferecendo experiências incríveis de compra.</li>
                    <li className="lista-item">Responda rapidamente aos problemas de suporte ao cliente em qualquer canal.</li>
                    <li className="lista-item">Automatize tarefas demoradas criando aplicativos personalizados.</li>
                </ul>
                
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default Empresa;