import Footer from "../Footer/page";
import Header from "../Header/page";
import './tecladoVirtual.css'

const TecladoVirtual = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-teclado-virtual">
                    <h1>Teclado Virtual</h1>
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default TecladoVirtual;