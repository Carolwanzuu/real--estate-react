import React from 'react';
import styled , {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav `
height:50px;
background:blue;
display: flex;
justify-content:space-between;
padding: 16px 32px;
z-index:100;

width:100;

`;
const NavLink=css`
color:black;
display:flex;
align-items:center;
padding:0 16px;
height:100;
cursor:pointer;
text-decoration:none;
`

const Logo = styled(Link)`
${NavLink}
font-style:italic;
`;

const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width:768px){
  display:block;
  background-size:contain;
  height:40px;
  width:30px;
  cursor:pointer;
  top:0;
  right:0;
  transform: translate(-30%,-20%);
  color:white;
}
`
const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width:768px){
  display:none;
}
`
const NavMenuLinks = styled(Link)`
${NavLink}
`

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:10px;

@media screen and (max-width:768px){
  display:none;
}
`

const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>ELIXR</Logo>
      <MenuBars/>
      <NavMenu>
        {menuData.map((item,index) =>(
          <NavMenuLinks to ={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
        
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>Contact Us</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar