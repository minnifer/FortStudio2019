import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { bubble as Menu } from 'react-burger-menu'

const Nav = ({ state }) => (
  <Container>
     <Menu right>
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
  width: 1440px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: auto;
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
