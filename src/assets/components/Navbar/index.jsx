import React from 'react'
import {Nav} from './styles'
import logo from '../../img/logo.png'
import { MenuHamburger } from '../MenuH'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Nav>
        <Link className='div-img' to="/OdontoCare-Plus">
            <img src={logo} alt="Logo OndontoCare Plus" />
        </Link>
        <div className="itens">
            <Link to="/OdontoCare-Plus/sobre">Sobre nós</Link>
            <Link to="/OdontoCare-Plus/especialidades">Especialidades</Link>
            <Link to="/OdontoCare-Plus/contato">Entre em contato</Link>
        </div>
        <MenuHamburger/>
    </Nav>
  )
}
