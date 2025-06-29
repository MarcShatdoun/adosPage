import React from 'react'
 import { Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
        <nav className="bg-[#1B1B1D] w-full h-48 border-b-4 border-b-[#2D2D2F]">
            <div className="flex justify-center items-center h-52 w-full animate-fade-up animate-once animate-ease-out ">
                <a href="/worldTour">
                 <img className =" " src="./src/assets/icons/Ado_logo.webp" alt="" />
                </a>
               
            </div>
            <div>
                <ul className="flex justify-center items-center gap-4 text-amber-50">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/worldTour">World Tour</Link>
                    </li>
                </ul>
            
            </div>
        </nav>
        </>
    )
}