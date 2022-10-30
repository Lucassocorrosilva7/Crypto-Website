import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper,SidebarMenu,SidebarLink } from './SidebarStyled'

const Sidebar = ({isOpen, toggle}) => {
  return (
   <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to="/about">Marketplace</SidebarLink>
                <SidebarLink onClick={toggle} to="/about">Estatísticas</SidebarLink>
                <SidebarLink onClick={toggle} to="/about">Recursos</SidebarLink>
                <SidebarLink onClick={toggle} to="/about">Criar</SidebarLink>
            </SidebarMenu>
            
        </SidebarWrapper>
    </SidebarContainer>    
   </>
)
}

export default Sidebar