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
            <h2>Bem-vindo à Salesforce</h2>
            <p>Potencialize sua empresa com a Salesforce. 98% dos clientes superam suas metas de ROI.</p>
            <h2>CRESÇA, CONECTE-SE, CONQUISTE. POTENCIALIZE SUA EMPRESA COM A SALESFORCE</h2>
            <button className="button-azul">Teste Grátis</button>
            <button className="button-borda">Teste Grátis</button>
        </section>
        <section id="produtos">
            <h2>Produtos</h2>
            <p>Saiba mais sobre nossos produtos e serviços.</p>
            <button className="button-azul">Saiba Mais</button>
        </section>
      </main>
      <section id="clientes">
        <p className="pad">CLIENTES</p>
      </section>
        <Card></Card>
      <Footer></Footer>
    </>
  );
}
