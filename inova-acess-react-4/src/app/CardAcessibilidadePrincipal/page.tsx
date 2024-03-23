import './cardacessibilidadeprincipal.css';
import Image from 'next/image';
import Acess from '../img/acess.png'
const CardAcessibilidadePrincipal = () =>{
    return(
        <>
            <main>
                <div className="content-card2">
                    <div className="card-acessibilidade">Pra quem possui deficiencia física ou motora
                        <Image src={Acess} alt="LogoAcess" width={120} height={120} className="card-acessibilidade2"/>
                        <a href="\AcessibilidadeFerramentas" className='acesse'>ACESSE</a>
                    </div>
                </div>
            </main>
        </>
    )
}
export default CardAcessibilidadePrincipal;