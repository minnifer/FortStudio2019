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
`;

const StyledText = styled.h5`
  z-index: 2;
  position: absolute;
  transform:translateX(-25%);
`;
const Container = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: none;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    max-width: none;
    position: relative;
  }

  .card1,
  .card2,
  .card3,
  .card4 {
    position: absolute;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
  }
  .cardWrapper {
    transform: translateX(-25%) translateY(-25%);
    width: 200px;
    height: 200px;
    position: absolute;
  }
  .card1 {
    width: 0;
    height: 0;
    background-color: #ffc400;
    border-radius: 50%;
    z-index: 0;
    transition: height 100ms ease-in-out, width 100ms ease-in-out;
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E %3Ccircle id='Cursor' cx='6' cy='6' r='6' fill='%231D1D1D' opacity='0.9'/%3E %3C/svg%3E "),
      pointer;
  }
  &:hover {
    .card1 {
      width: 200px;
      height: 200px;
    }
  }
`;
// consts
