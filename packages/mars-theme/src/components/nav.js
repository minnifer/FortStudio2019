import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { slide as Menu } from 'react-burger-menu'

const Nav = ({ state }) => (
  <Container>
     <Menu noOverlay onStateChange={ isMenuOpen } customCrossIcon={ false } disableAutoFocus customBurgerIcon={ <span className="navText">Menu</span> } width={ '100%' }  styles={ styles } right>
        {state.theme.menu.map(([name, link]) => (
          <Item key={name} isSelected={state.router.link === link}>
            <Link className="menu-item" link={link}>{name}</Link>         
          </Item>        
        ))}          
      </Menu>
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  justify-content:center;
  align-items:center;
  margin-right:119px;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  
  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

var styles = {
  bmBurgerButton: {
      position:'relative',
      overflow:'hidden'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    zIndex: '30',
    top: '0'
  },
  bmMenu: {
    background: '#121212',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    width: '100%',
    opacity:'95%',
    height:'auto'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  bmIcon: {
    color: '#000',
    fontFamily: 'Calibre',
    fontWeight: '500',
    textTransform: 'uppercase',    
  }
}

var isMenuOpen = function(state) {
  var menuText;
    if (state.isOpen){
      menuText = "Menu";
    }
    else{
      menuText="Close"
    }
};