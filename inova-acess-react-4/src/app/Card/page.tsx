import React from 'react';
import './card.css'
import Image from 'next/image';
import Sul from '../img/sulamericalogo.png'
import Caloi from '../img/caloilogo.png'
import Alelo from '../img/alelologo.png'
import Sumup from '../img/sumuplogo.png'
import Vivo from '../img/vivo.png'
import Fedex from '../img/fedex.png'
import Gympass from '../img/gympass.png'

const Card = () =>{
    return(
        <>
            <main>
                <div className="content2">
                    <ul>
                        <Image src={Sul} alt="LogoSulamerica" width={300} height={200} className='card efeito'/>
                        <Image src={Caloi} alt="LogoCaloi picture" width={300} height={200} className='card efeito' />
                        <Image src={Alelo} alt="LogoAlelo picture" width={300} height={200} className='card efeito'/>
                        <Image src={Sumup} alt="LogoSumup" width={300} height={200} className='card efeito'/>
                        <Image src={Vivo} alt="LogoVivo" width={300} height={200} className='card efeito'/>
                        <Image src={Fedex} alt="LogoFedex" width={300} height={200} className='card efeito'/>
                        <Image src={Gympass} alt="LogoGympass" width={300} height={200} className='card efeito'/>
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Card;