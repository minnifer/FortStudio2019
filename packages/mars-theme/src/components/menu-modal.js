import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import VideoPlayer from "./partials/VideoPlayer";
const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const options = state.source.get("acf-options-page");
  const navSubheads = options.acf.menu_subheads;
  return (
    <>
      <StyledVideoPlayer
        nav="nav"
        toggle={state}
        src={options.acf.video["url"]}
      />
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
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  &:before {
    content: "";
    background-color: rgba(18, 18, 18, 0.98);
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  &:after {
    content: "";
    background-color: rgba(29, 29, 29, 0.98);
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
  @media (max-width: 768px) {
    padding-top:50px;
    &:before,
    &:after {
      width: 100%;
      height: 50%;
    }
    &:after {
      bottom: 0;
      top: auto;
    }
  }
`;

const MenuContent = styled.div`
  z-index: 41;
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 1440px;
  margin: auto;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
  padding-left: 114px;
  margin-top: 185px;
  z-index: 5;
  /* background-color: rgba(18, 18, 18, 0.95); */
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
  .navHeadline {
    font-weight: 300;
    font-size: 48px;
    letter-spacing: 0;
    line-height: 16px;
    color: #ffffff;
    transition: color 250ms ease-in-out;
  }
  .navSubhead {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.84px;
    line-height: 51px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.2);
    transition: color 250ms ease-in-out;
  }
  &:last-of-type {
    align-items: flex-end;
    padding-left: 0;
    padding-right: 114px;
    /* background-color: rgba(29, 29, 29, 0.95); */
  }
  &:hover,
  &:focus {
    .navHeadline {
      color: #ffc400;
    }
    .navSubhead {
      color: #ffffff;
    }
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    padding-left: 65px;
    padding-right: 0;
    /* padding-top: 100px; */
    margin-top: 65px;
    &:last-of-type {
      align-items: flex-start;
      padding-left: 65px;
      padding-top: 0;
      padding-right: 0;
    }
  }
`;
const StyledVideoPlayer = styled(VideoPlayer)`
  &.active {
    left: 25%;
  }
`;
export default connect(MenuModal);
