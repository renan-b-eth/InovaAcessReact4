import Footer from "../Footer/page";
import Header from "../Header/page";
import './cameramouse.css'

const CameraMouse = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-camera-mouse">
                    <h1>CameraMouse</h1>
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default CameraMouse;