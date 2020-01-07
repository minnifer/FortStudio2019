import React from "react";
import { useSpring, animated } from "react-spring";
import { connect, styled } from "frontity";
import Link from "./../link";
const Card = ({ target, linkURL, linkText, text }) => {
  return (
    <Container className="link" data-stick-cursor>
      {linkURL ? (
        <StyledLink target={target} link={linkURL}>{linkText}</StyledLink>
      ) : (
        <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
      )}
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
  padding-top:5px;    
  text-transform: uppercase;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  cursor: none;
  color: #fff;
  z-index: 6;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    color: #1d1d1d;
  }
  @media (max-width: 768px) {
    &:hover,
    &:focus, &:active {
      color: #ffc400;
    }
  }
`;

const StyledText = styled.h5`
  width: fit-content;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0.84px;
  font-size: 14px;
  text-transform: uppercase;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  cursor: none;
  color: #1d1d1d;
  z-index: 30;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  transform: translate(-25%, -25%);
`;
// consts
