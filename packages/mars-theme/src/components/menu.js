import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions, menuTheme }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <Container className="link" data-small-cursor>
      <MenuToggle
        menuTheme={menuTheme}
        onClick={actions.theme.toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="24px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal state={state} />}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: none;
  right: 30px;
  top: 80px;
  z-index: 900;
  position: absolute;
  @media (max-width: 1024px) {
    position: relative;
    right: auto;
    top: auto;
  }
`;
const MenuToggle = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  color: white;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  cursor: none;
  span {
    font-weight: 500;
    line-height: 51px;
    letter-spacing: 0.84px;
    font-size: 12px;
    text-transform: uppercase;
    transition: color 250ms ease-in-out;
    &.menuOpen {
      color: ${props => props.menuTheme};
    }
  }
  &:hover {
    span {
      color: #1d1d1d;
    }
  }
  @media (max-width: 1024px) {
    right: 36px;
    top: auto;
    width:auto;
    height:auto;
    position:absolute;
    &:hover {
      span {
        color: #ffc400;
      }
    }
  }
`;

export default connect(MobileMenu);
