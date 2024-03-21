import CardIntegrantes from "../CardIntegrantes/page";
import Footer from "../Footer/page";
import Header from "../Header/page";


const Integrantes = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-integrantes">
                    <h1>INTEGRANTES</h1>
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