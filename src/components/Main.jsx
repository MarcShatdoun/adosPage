import React from 'react'
import data from '../data/ado.json'
import SongCard from './songCard'



export default function Main() {
    return (
        <>
            <main>
                <h1>Catalogo canciones de ADO</h1>
                <div className="grid grid-cols-3 gap-4">
                    {data.map((song) => (
                    <SongCard key={song.id} song={song} />
                    ))}
                    
                </div>
                

            </main>            
        </>
    )
}