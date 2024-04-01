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
            <div className='rodape'>
                <p>© Copyright 2024 Salesforce, Inc.</p>
            </div>
            <div className='rodape2'>
                <p className='cor'>Salesforce, Inc. Salesforce Tower 415 Mission Street 3rd Floor, San Francisco, CA 94105, United States</p>
            </div>
        </footer>
        <Coletagemclicks></Coletagemclicks>
        </>
    )
}
export default Footer;