import React from 'react'
import Jpflag from '../assets/icons/flag_japan.svg'

const Hero = () => {
    return (
        <section className='max-w-[70rem] mx-auto'>
         <h1 className='text-4xl text-center'>Quien es ado?</h1>
         <div className="w-full h-auto my-2 bg-[#1B1B1D] flex justify-center items-center lg:flex-row flex-col">
            <div className='flex  w-1/2 py-8 '>
                <img className='rounded-lg w-44 md:w-4/6 xl:w-3/4 pl-4 ' src="./src/assets/img/adopic.webp" alt="" />
            </div>
            <div className=' w-1/2'>
                <div className='flex flex-col mb-8 gap-1 text-xs md:text-xl lg:text-lg lg:mb-12 '>
                 <h3><span className='text-gray-300'>Nombre artistico:</span> ADO</h3>
                 <p><span className='text-gray-300'>Nombre: </span> Desconocido</p>
                 <p><span className='text-gray-300'>Edad:</span> 22</p>
                 <span className='flex '><p> <span className='text-gray-300'>Nacionlidad</span>: JP </p><img className='w-8 object-contain pl-2' src={Jpflag} alt="jp flag" /></span>
                </div>
                <h3 className='text-2xl font-medium'>Un poco de su historia...</h3> 
                <p className='text-sm mr-4'>Ado es una cantante japonesa que ha ganado popularidad en la escena musical  japonesa en los últimos años, es conocida por su estilo musical único, que combina elementos de J-Pop y J-Rock con influencias de la música electrónica y el hip-hop. Su voz es poderosa y emotiva, y sus letras a menudo tratan temas de amor, amistad y autoempoderamiento. Debutó en la escena musical japonesa en 2020 con su sencillo "Ussewa". Desde entonces, ha lanzado varios sencillos y álbumes que han sido bien recibidos por la crítica y el público.</p>          
            </div>
         </div>
        </section>
    )
}

export default Hero