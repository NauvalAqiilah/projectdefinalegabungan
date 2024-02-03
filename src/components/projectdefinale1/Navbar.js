import React from 'react'
import './navbar.css'
import Foto from './Perkakas/Foto1.png'

const Navbar = () => {
  return (
    <nav>
        <img src={Foto} className='foto'/>
        <ul>
            <li><a href='About.js'>TENTANG KAMI</a></li>
            <li><a href='Informasi.js'>INFORMASI</a></li>
            <li><a href='Daftar.js'>DAFTAR</a></li>
        </ul>
    </nav>
  )
}
export default Navbar