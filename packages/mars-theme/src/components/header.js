import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Logo from "./logo";
import MobileMenu from "./menu";

const Header = ({ state, menuTheme }) => (
  
  <>  
    <Container>      
      <Logo menuTheme={menuTheme}/>
      {/* <Nav theme={theme}/> */}
      <MobileMenu menuTheme={menuTheme}/>
    </Container>
  </>
);

export default connect(Header);

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  display: flex;  
  justify-content: space-around;  
  align-items:center;
  margin:auto;   
  position:relative;
  
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

