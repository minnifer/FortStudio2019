import React from "react";
import { useSpring, animated } from "react-spring";
import { connect, styled } from "frontity";
import Link from "./../link";
const CenteredCard = ({ linkURL, linkText, text, activeTout }) => {
  return (
    <Container data-grow-cursor className={[activeTout, "link"].join(' ')} >
      {linkURL ? (
        <StyledLink link={linkURL}><span>{linkText}</span></StyledLink>
      ) : (
        <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
      )}
    </Container>
  );
};

export default connect(CenteredCard);

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  z-index: 10;
  position: relative;
  width: 180px;
  height: 180px;
  /* transition: background-color 250ms ease-in-out; */
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  border-radius:50%;
  margin-top:-20px;
  margin-bottom:-20px;
  
  span{
      width:80%;
      z-index: 10;
  }
  &:before{
    content: '';
    width: 130px;
    height: 130px;
    background-color: #F8F8F8;
    border-radius:50%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    border:1px solid #fff;
  }
  @media (max-width: 1024px) {
    width:108.4px;
    height:108.4px;
    span{
      width:100%;
    }
  }
  &:hover{
    background-color:transparent;
    &:before{
      content:none;
    }
  }
  &:after{
    content: "";
    opacity:0;
    transition: opacity 250ms ease-in-out;
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
  margin-right:10px;
  z-index:99;
  /* &.first{
    &:first-of-type{
      position:fixed;
      bottom:2vw;
      right:26vw;
      a{
        background-color:#FFC40A;
        transition:transform 250ms ease-in-out;
        span{
          transition:transform 250ms ease-in-out;
        }
        &:hover{
          /* background-color:transparent; */         
          transform:scale(1.2);
          span{
            transform:scale(.825);
          }
        }
      }
    }
  }
  /* &.last{
    &:first-of-type{
      transform:translateX(-125%);
    }
    &:last-of-type{
      position:fixed;
      bottom:2vw;
      right:19vw;
      a{
        background-color:#FFC40A;
        
      }
    }
  } */
  &:last-of-type{
    margin-right:0;
  }
`;
// consts
