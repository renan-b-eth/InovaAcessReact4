import CardAcessibilidadePrincipal from "../CardAcessibilidadePrincipal/page";
import Footer from "../Footer/page";
import Header from "../Header/page";
import React from 'react';
import './acessibilidadeferramentas.css'
import AcessibilidadeCameraMouse from "../AcessibilidadeCameraMouse/page";

const AcessibilidadeFerramentas = () =>{
    return(
        <>
            <Header></Header>
            <main>
                <div className="content-acessibilidade3">
                    <h1>ACESSIBILIDADE FERRAMENTAS</h1>
                    <AcessibilidadeCameraMouse></AcessibilidadeCameraMouse>
                    
                </div>
            </main>
            <section id="footer">
            <Footer></Footer>

            </section>
        </>
    )
}
export default AcessibilidadeFerramentas;