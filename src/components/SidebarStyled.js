import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const SidebarContainer = styled.aside`
@media screen and (max-width:768px) {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #222;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; 
}
   
`

export const CloseIcon = styled(FaTimes)`
@media screen and (max-width:768px){
    color: #fff;
}
`


export const Icon = styled.div`
    display: none;
@media screen and (max-width:768px){
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 3.2rem;
    cursor: pointer;
    display: block;
}
`


export const SidebarWrapper = styled.div`
color: #fff;
`


export const SidebarMenu = styled.ul`
    display: none;
    @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;   
    }

    @media screen and (max-width:480px){
        grid-template-columns: repeat(6,80px);
    }
`

export const SidebarLink = styled(LinkS)`
    @media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
    transition: .2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: purple;
        transition:  .2s ease-in-out;
    }
    }
`




