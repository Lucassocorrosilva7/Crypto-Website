import React from 'react'
import { Nav, NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem } from './NavbarStyled'
import {FaBars} from "react-icons/fa"



const Navbar = ({toggle}) => {
  return (
    <>
   <Nav>
    <NavbarContainer>
        <NavLogo to="/">NFT</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="/about">Marketplace</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/about">Estatísticas</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/about">Recursos</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/about">Criar</NavLinks>
            </NavItem>
        </NavMenu>
    </NavbarContainer>
   </Nav>
    </>
  )
}


export default Navbar



