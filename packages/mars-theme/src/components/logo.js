import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import YourMouse from "./utils/YourMouse";
const Logo = ({ state, actions, menuTheme }) => {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <Container>
        <StyledLink link="/">
          {isMobileMenuOpen ? (
            <>
              <StyledSVG
                version="1.1"
                id="logo_x5F_group"
                x="0px"
                y="0px"
                viewBox="0 0 563.68 218.69"
                menuTheme="white"
              >
                <polygon
                  id="f"
                  points="42.79,101.42 95.62,101.42 95.62,63.39 42.79,63.39 42.79,41.2 100.95,41.2 100.95,3.17 0,3.17 0,3.17 
	0,142.63 42.79,142.63 "
                />
                <polygon
                  id="t"
                  points="440.32,3.17 440.32,41.2 480.61,41.2 480.61,142.63 523.4,142.63 523.4,41.2 563.68,41.2 563.68,3.17 "
                />
                <path
                  id="r"
                  d="M339.21,101.42h11.87l23.79,41.2h42.79l-28.17-48.8c14.9-8.23,25-24.09,25-42.32c0-26.69-21.64-48.34-48.33-48.34
	h-69.73v139.46h42.79V101.42z M339.21,38.03h20.6c7.88,0,14.26,6.39,14.26,14.26c0,7.88-6.39,14.26-14.26,14.26h-20.6V38.03z"
                />
                <path
                  id="o"
                  d="M196.63,145.8c40.26,0,72.9-32.64,72.9-72.9c0-40.26-32.64-72.9-72.9-72.9s-72.9,32.64-72.9,72.9
	C123.73,113.16,156.37,145.8,196.63,145.8z M196.63,41.2c17.51,0,31.7,14.19,31.7,31.7c0,17.5-14.19,31.69-31.7,31.69
	s-31.7-14.19-31.7-31.69C164.94,55.39,179.13,41.2,196.63,41.2z"
                />
                <rect id="underline" y="180.66" width="558.36" height="38.03" />
              </StyledSVG>
            </>
          ) : (
            <StyledSVG
              menuTheme={menuTheme}
              version="1.1"
              id="logo_x5F_group"
              x="0px"
              y="0px"
              viewBox="0 0 563.68 218.69"
            >
              <polygon
                id="f"
                points="42.79,101.42 95.62,101.42 95.62,63.39 42.79,63.39 42.79,41.2 100.95,41.2 100.95,3.17 0,3.17 0,3.17 
	0,142.63 42.79,142.63 "
              />
              <polygon
                id="t"
                points="440.32,3.17 440.32,41.2 480.61,41.2 480.61,142.63 523.4,142.63 523.4,41.2 563.68,41.2 563.68,3.17 "
              />
              <path
                id="r"
                d="M339.21,101.42h11.87l23.79,41.2h42.79l-28.17-48.8c14.9-8.23,25-24.09,25-42.32c0-26.69-21.64-48.34-48.33-48.34
	h-69.73v139.46h42.79V101.42z M339.21,38.03h20.6c7.88,0,14.26,6.39,14.26,14.26c0,7.88-6.39,14.26-14.26,14.26h-20.6V38.03z"
              />
              <path
                id="o"
                d="M196.63,145.8c40.26,0,72.9-32.64,72.9-72.9c0-40.26-32.64-72.9-72.9-72.9s-72.9,32.64-72.9,72.9
	C123.73,113.16,156.37,145.8,196.63,145.8z M196.63,41.2c17.51,0,31.7,14.19,31.7,31.7c0,17.5-14.19,31.69-31.7,31.69
	s-31.7-14.19-31.7-31.69C164.94,55.39,179.13,41.2,196.63,41.2z"
              />
              <rect id="underline" y="180.66" width="558.36" height="38.03" />
            </StyledSVG>
          )}
        </StyledLink>
      </Container>
    </>
  );
};

export default connect(Logo);

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  margin-top: 114px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 48;
  @media (max-width: 1024px) {
    padding: 0;
    padding: 36px 0;
    margin-top: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 119px;
  padding-right: 0;
  width: fit-content;
  @media (max-width: 1024px) {
    padding: 0;
    padding-left: 36px;
  }
`;

const StyledSVG = styled.svg`
  width: 100px;
  polygon,
  path,
  rect {
    fill: ${props => props.menuTheme};
    transition: fill 250ms ease-in-out, transform 250ms ease-in-out;
  }
  &:hover,
  &:active,
  &:focus {
    rect {
      -webkit-animation: 500ms ease 0s normal forwards 1 drawLine;
      animation: 500ms ease 0s normal forwards 1 drawLine;
    }
  }
  @keyframes drawLine {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
  /* &:hover,
  &:focus {
    g,
    path {
      fill: #ffc40a;
    }
  } */
`;
