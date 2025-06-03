import React from 'react'

const Hero = () => {
    return (
        <>
        <h1 className='text-2xl text-center'>Quien es ado?</h1>
        <div className="w-full h-auto my-2 bg-[#1B1B1D] flex justify-center items-center">
            <img className='rounded-lg' src="./src/assets/img/adopic.webp" alt="" />
            <div>
                <h2>Ado</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod ad consequuntur aut dicta totam iure nobis natus aliquam eum.</p>
            </div>

        </div>
        </>
    )
}

export default Hero