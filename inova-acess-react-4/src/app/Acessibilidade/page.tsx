import CardAcessibilidadePrincipal from "../CardAcessibilidadePrincipal/page";
import Footer from "../Footer/page";
import Header from "../Header/page";

const Acessibilidade = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-acessibilidade">
                    <h1>ACESSIBILIDADE</h1>
                    <CardAcessibilidadePrincipal></CardAcessibilidadePrincipal>
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default Acessibilidade;