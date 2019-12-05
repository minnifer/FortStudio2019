import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Logo from "./logo";

const Header = ({ state, theme }) => (
  
  
  <>  
    <Container>      
      <Logo theme={theme}/>
      <Nav theme={theme}/>
    </Container>
  </>
);

export default connect(Header);

const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;  
  justify-content: space-around;  
  margin:auto;   
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

