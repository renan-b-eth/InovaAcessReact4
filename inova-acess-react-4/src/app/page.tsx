import Image from "next/image";
import Header from "./Header/page";
import Card from "./Card/page";
import Einsten from './img/einsten.png'
import Footer from "./Footer/page";
import PrecisaAcessibilidade from "./PrecisaAcessibilidade/page";

export default function Home() {
  return (
    <>
      {/*<PrecisaAcessibilidade></PrecisaAcessibilidade>*/}
      <Header></Header>
      <main>
      <Image src={Einsten} alt="Landscape picture" className="position-einten efeito2" />
        <section id="intro">
            <h2>CRESÇA, CONECTE-SE, CONQUISTE. POTENCIALIZE SUA EMPRESA COM A SALESFORCE</h2>
            <button className="button-azul">Empresa</button>
            <button className="button-borda">Suporte</button>
        </section>
        <section id="produtos">
            <p>Saiba mais sobre nossos produtos e serviços.</p>
        </section>
      </main>
      <section id="clientes">
        <br></br>
        <br></br>
        <br></br>
        <Card></Card>
      </section>
      <Footer></Footer>
    </>
  );
}
