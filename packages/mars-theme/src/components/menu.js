import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions, menuTheme }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <Container className="link" data-stick-cursor>
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
      {isMobileMenuOpen && <MenuModal />}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: none;
  right: 84px;
  top: 80px;
  position: absolute;
  @media (max-width: 768px) {
    position:relative;
    right: auto;
    top: auto;
  }
`;
const MenuToggle = styled.button`
  padding: 0;  
  background: transparent;
  border: 0;
  color: white;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width:130px;
  height:130px;
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
  @media (max-width: 768px) {
    right: 36px;
    top: auto;
  }
`;

export default connect(MobileMenu);
