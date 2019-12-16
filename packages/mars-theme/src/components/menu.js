import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions, menuTheme }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
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
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: white;
  z-index: 5;
  right: 114px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  top:110px;
  span {
    font-weight: 500;
    line-height: 51px;
    letter-spacing: 0.84px;
    font-size: 12px;
    text-transform: uppercase;
    transition:color 250ms ease-in-out;
    &.menuOpen{
      color: ${props => props.menuTheme};
    }
  }
  &:hover {
    span {
      color: #ffc40a;
    }
  }
  @media (max-width: 768px) {
    right:36px;
    top:auto;
  }
`;

export default connect(MobileMenu);
