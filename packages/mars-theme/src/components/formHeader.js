import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Logo from "./logo";
import MobileMenu from "./menu";
import GoBack from "./utils/goBack";

const FormHeader = ({ state, menuTheme }) => {
  function goBack() {
    window.history.back();
  }
  return (
    <>
      <Container>
        <Logo menuTheme={menuTheme} />
        <div data-small-cursor
        className='link'
        >
          <CloseButton className={`${menuTheme}`} onClick={goBack}>Close</CloseButton>
        </div>
      </Container>
    </>
  );
};

export default connect(FormHeader);
const CloseButton = styled.button`
  width: fit-content;
  z-index: 49;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0.84px;
  font-size: 12px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  width:100px;
  height:100px;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  transition: color 250ms ease-in-out;
  cursor:pointer !important;
  outline: none;
  /* color: #ffc40a;
  &:hover {
    color: #ffc40a;
  } */
  @media (max-width: 1024px) {
    position: relative;
    top: auto;
    right: 36px;
    width:auto;
    height:auto;
  }
  &.white{
    color: #fff;
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
  .link {
    top: 130px;
    right: 80px;
    width:100px;
    height:100px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
      top:36px;
      right:0;
      height:auto;
      width:auto;
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
