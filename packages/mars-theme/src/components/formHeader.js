import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Logo from "./logo";
import MobileMenu from "./menu";
import GoBack from "./utils/goBack";
const FormHeader = ({ state, menuTheme }) => {
  function goBack() {
    window.history.back()
  }
  return (
    <>
      <Container>
        <Logo menuTheme={menuTheme} />
        <div className="link" data-stick-cursor>
          <CloseButton onClick={goBack}>Close</CloseButton>          
        </div>
      </Container>
    </>
  );
};

export default connect(FormHeader);
const CloseButton = styled.button`
  position: absolute;
  top: 120px;
  right: 120px;
  width: fit-content;
  z-index:49;
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
  @media (max-width: 768px) {
    position:relative;
    top:auto;
    right:36px;
  }
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
