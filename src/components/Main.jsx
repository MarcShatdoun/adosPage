import React from 'react'
import data from '../data/ado.json'
import SongCard from './songCard'



export default function Main() {
    return (
        <>
            <main>
                <h1 className='text-2xl text-center text-amber-50'>Catalogo canciones de ADO</h1>
                <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-[70rem] mx-auto bl">
                    {data.map((song) => (
                    <SongCard key={song.id} song={song} />
                    ))}
                    
                </div>
                

            </main>            
        </>
    )
}