import Image from "next/image";
import Header from "./Header/page";
import Card from "./Card/page";
import Einsten from './img/einsten.png'
import Footer from "./Footer/page";
import PrecisaAcessibilidade from "./PrecisaAcessibilidade/page";
import Sales from "./img/sales.png"
import Coletagemclicks from "./ColetagemClicks/coletagemclicks";
import MenuAcessivel from "./MenuAcessivel/page";

export default function Home() {
  return (
    <>
      {/*<PrecisaAcessibilidade></PrecisaAcessibilidade>*/}
      <MenuAcessivel></MenuAcessivel>
      <Header></Header>
      <main>
      <Image src={Einsten} alt="Eisten Pensador" className="position-einten efeito2" />
        <section id="intro">
            <span className="tamanhofonte"><h2 className="fonte-tamanho">CRESÇA, CONECTE-SE</h2></span>
            <h2>CONQUISTE!</h2>
            <br></br>
            <h3>POTENCIALIZE COM</h3>
            <Image src={Sales} alt="Letra Destaque Salesforce" className="position-sales"/>
            <br></br>
            <br></br>
            <a href="\Empresa" className="button-azul">Empresa</a>
            <a href="\Acessibilidade" className="button-borda">Acessibilidade</a>
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
