import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
        <nav className="bg-[#1B1B1D] w-full h-48 border-b-4 border-b-[#2D2D2F]">
            <div className="w-full h-full flex justify-center items-center">
                <img src="./src/assets/icons/Ado_logo.webp" alt="" />
            </div>
            <div>
                <ul className="flex justify-center items-center gap-4 text-amber-50">
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/catalogo'}><li>Galeria</li></Link>
                </ul>
            </div>
        </nav>
        </>
    )
}