import Image from "next/image";
import Header from "./Header/page";
import Card from "./Card/page";
import Einsten from './img/einsten.png'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
      <Image src={Einsten} alt="Landscape picture" className="position-einten" />
        <section id="intro">
            <h2>Bem-vindo à Salesforce</h2>
            <p>Potencialize sua empresa com a Salesforce. 98% dos clientes superam suas metas de ROI.</p>
            <button className="button-azul">Teste Grátis</button>
            <button className="button-borda">Teste Grátis</button>
        </section>
        <section id="produtos">
            <h2>Produtos</h2>
            <p>Saiba mais sobre nossos produtos e serviços.</p>
            <button className="button-azul">Saiba Mais</button>
        </section>
      </main>

      <h2 className="pad">Clientes</h2>
      <p className="pad">Veja alguns dos nossos clientes:</p>
      <section id="clientes">
            <Card></Card>
            <p>
                <a href="#">Explore todas as histórias de sucesso</a>
                <a href="tel">Entre em contato descricao</a>
            </p>
            <p>© 2002 copy aqui</p>
        </section>
    </>
  );
}
