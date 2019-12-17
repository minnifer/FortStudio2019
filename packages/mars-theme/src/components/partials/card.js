import React from "react";
import { useSpring, animated } from "react-spring";
import { connect, styled } from "frontity";
import Link from "./../link";
const Card = ({ linkURL, linkText, text }) => {
  return (
    <Container className="link" data-stick-cursor>
      <StyledLink link={linkURL}>{linkText}</StyledLink>
      <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
    </Container>
  );
};

export default connect(Card);

const StyledLink = styled(Link)`
  width: fit-content;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0.84px;
  font-size: 14px;
  text-transform: uppercase;
  transition: color 250ms ease-in-out;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  cursor: none;
  color: #fff;
  transition: color 250ms ease-in-out;
  z-index: 6;
  position: absolute;
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:hover {
    color: #1d1d1d;
  }
`;

const StyledText = styled.h5`
  z-index: 2;
  position: absolute;
  transform: translateX(-25%);
`;
const Container = styled.div`
  width: 130px;
  height: 130px;
  transform:translateX(-15%);
`;
// consts
