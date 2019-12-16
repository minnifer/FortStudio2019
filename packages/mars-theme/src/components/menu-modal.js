import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const options = state.source.get("acf-options-page");
  const navSubheads = options.acf.menu_subheads;
  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        <MenuLink key="What We Do" link="/what-we-do">
          <span className="navHeadline">What We Do</span>
          <span className="navSubhead">{navSubheads.what_we_do_subhead}</span>
        </MenuLink>
        <MenuLink key="Who We Are" link="/who-we-are">
          <span className="navHeadline">Who We Are</span>
          <span className="navSubhead">{navSubheads.who_we_are_subhead}</span>
        </MenuLink>
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #121212;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 18vw;
  z-index: 5;
  &:hover,
  &:focus {
    background-color: rgba(29, 29, 29, 95);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
  .navHeadline {
    font-weight: 300;
    font-size: 38px;
    letter-spacing: 0;
    line-height:24px;
    color: #ffffff;
  }
  .navSubhead {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.84px;
    line-height: 51px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.2);
  }
  &:last-of-type {
    align-items: flex-end;
    padding-left: 0;
    padding-right: 18vw;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    padding-left: 65px;
    padding-right: 0;
    padding-top: 100px;
    &:last-of-type {
      align-items: flex-start;
      padding-left: 65px;
      padding-top: 0;
      padding-right: 0;
      
    }
  }
`;

export default connect(MenuModal);
