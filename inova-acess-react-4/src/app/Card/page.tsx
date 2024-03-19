import React from 'react';
import './card.css'
import Image from 'next/image';
import Sul from '../img/sulamericalogo.png'
import Caloi from '../img/caloilogo.png'
import Alelo from '../img/alelologo.png'
import Sumup from '../img/sumuplogo.png'

const Card = () =>{
    return(
        <>
            <main>
                <div className="content2">
                    <ul>
                        <Image src={Sul} alt="Landscape picture" width={300} height={200} className='card efeito'/>
                        <Image src={Caloi} alt="Landscape picture" width={300} height={200} className='card efeito' />
                        <Image src={Alelo} alt="Landscape picture" width={300} height={200} className='card efeito'/>
                        <Image src={Sumup} alt="Landscape picture" width={300} height={200} className='card efeito'/>
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Card;