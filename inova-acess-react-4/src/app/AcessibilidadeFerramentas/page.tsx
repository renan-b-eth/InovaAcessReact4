import CardAcessibilidadePrincipal from "../CardAcessibilidadePrincipal/page";
import Footer from "../Footer/page";
import Header from "../Header/page";
import './acessibilidadeferramentas.css'

const AcessibilidadeFerramentas = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-acessibilidade3">
                    <h1>ACESSIBILIDADE FERRAMENTAS</h1>
                    <CardAcessibilidadePrincipal></CardAcessibilidadePrincipal>
                    <CardAcessibilidadePrincipal></CardAcessibilidadePrincipal>
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default AcessibilidadeFerramentas;