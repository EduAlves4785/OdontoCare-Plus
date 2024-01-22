import React, { useState } from 'react'
import {Menu} from './styles' 
import {MdOutlineMenu,MdMenuOpen} from 'react-icons/md'

export const MenuHamburger = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <Menu>
        <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
        <label htmlFor="menu-toggle" id="menu-icon">
            {menuOpen?<MdMenuOpen/>:<MdOutlineMenu />}
        </label>
            <div id="menu" className={menuOpen ? 'open' : ''}>
                <ul>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Especialidades</a></li>
                    <li><a href="">Entre em contato</a></li>
                </ul>
            </div>
    </Menu>
  )
}
