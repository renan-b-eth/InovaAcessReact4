import Coletagemclicks from '../ColetagemClicks/coletagemclicks';
import './footer.css'

const Footer = () =>{
    return(
        <>
            <footer id="rodape">
            {/*<p> 
                <button>Mudar de região </button>
                <a href="#">Termos de serviços </a> 
                <a href="#">Declaração de privacidade </a> 
                <a href="#">Divulgação responsável </a> 
                <a href="#">Segurance </a> 
                <a href="#">Contato </a> 
                <a href="#">Preferências de cookies </a>
            </p>*/}
            <p className='rodape'>
                © Copyright 2024 Salesforce, Inc.
            </p>
            {/*<p>
                Todos os direitos reservados. Várias marcas registradas pertencem a seus respectivos proprietários.
                Salesforce, Inc. Salesforce Tower 415 Mission Street 3rd Floor, San Francisco, CA 94105, United States
            </p>
            <p>
                <a href="tel:1-800-664-9073">Entre em contato (1-800-664-9073)</a>
            </p>*/}
        </footer>
        <Coletagemclicks></Coletagemclicks>
        </>
    )
}
export default Footer;