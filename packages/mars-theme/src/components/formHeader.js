import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Logo from "./logo";
import MobileMenu from "./menu";

const FormHeader = ({ state, menuTheme }) => (
  <>
    <Container>
      <Logo menuTheme={menuTheme} />
      {/* <Nav theme={theme}/> */}
      {/* <MobileMenu menuTheme={menuTheme}/> */}
      <div className="link" data-stick-cursor>
        <CloseButton onClick={() => this.props.navigation.goBack()}>Close</CloseButton>
      </div>
    </Container>
  </>
);

export default connect(FormHeader);
const CloseButton = styled.button`
  position: absolute;
  top: 120px;
  right: 120px;
  width: fit-content;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0.84px;
  font-size: 12px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  transition: color 250ms ease-in-out;
  /* color: #ffc40a;
  &:hover {
    color: #ffc40a;
  } */
`;
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
