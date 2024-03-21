import Footer from "../Footer/page";
import Header from "../Header/page";
import './login.css'

const Login = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-login">
                    <div className="form">
                        <form action="">
                            <label htmlFor="" className="titulo-label">LOGIN:</label>
                            <input type="text" name="login" placeholder="DIGITE SEU LOGIN" className="input-estilizado"></input>
                            <label htmlFor="">SENHA:</label>
                            <input type="text" name="senha" placeholder="DIGITE SUA SENHA:" className="input-estilizado"></input>
                            <input type="submit" value="LOGAR" className="button-azul"></input>
                        </form>
                    </div>
                </div>
            </main>
            <section id="footer">
                <Footer></Footer>
            </section>
        </>
    )
}
export default Login;