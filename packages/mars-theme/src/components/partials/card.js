import React from "react";
import { useSpring, animated } from "react-spring";
import { connect, styled } from "frontity";
import Link from "./../link";
const Card = ({ linkURL, linkText, text }) => {
  return (
    <Container>
      <StyledLink link={linkURL}>{linkText}</StyledLink>
      <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
    </Container>
  );
};

export default connect(Card);
const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  z-index: 2;
  position: relative;
  width: 130px;
  height: 130px;
  transition: background-color 250ms ease-in-out;
  &:after{
    content: "";
    opacity:0;
    transition: opacity 250ms ease-in-out;
  }
  &:hover {
    color: #1d1d1d;
    cursor: none;
    &:after {
      opacity:1;
      position: absolute;
      width: 130px;
      height: 130px;
      background-color: #ffc40a;
      top: 0%;
      left: 50%;
      transform: translate(-25%, -42.5%);
      z-index: -1;
      border-radius: 50%;
    }
  }
`;

const StyledText = styled.h5`
  z-index: 2;
  position: absolute;
  transform: translateX(-25%);
`;
const Container = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: none;
`;
// consts
