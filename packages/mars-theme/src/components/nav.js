import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { slide as Menu } from "react-burger-menu";

const Nav = ({ state }) => {
  const options = state.source.get("acf-options-page");
  const navSubheads = options.acf.menu_subheads;

  return (
    <NavContainer>
      <NavItem key="What We Do">
        <Link
          link="/what-we-do"
        >
          <span className="navHeadline">What We Do</span>
          <span className="navSubhead">{navSubheads.what_we_do_subhead}</span>
        </Link>
      </NavItem>
      <NavItem key="Who We Are">
        <Link
          link="/who-we-are"
        >
          <span className="navHeadline">Who We Are</span>
          <span className="navSubhead">{navSubheads.who_we_are_subhead}</span>
        </Link>
      </NavItem>
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  margin-right: 119px;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
