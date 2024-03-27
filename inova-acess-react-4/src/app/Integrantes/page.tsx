import CardIntegrantes from "../CardIntegrantes/page";
import Footer from "../Footer/page";
import Header from "../Header/page";
import "./integrantes.css";


const Integrantes = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-integrantes">
                    <h1>Integrantes</h1>
                    <CardIntegrantes></CardIntegrantes>
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default Integrantes;