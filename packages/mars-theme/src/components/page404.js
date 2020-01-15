import React, { Component } from "react";
import { styled } from "frontity";
import Header from "./header";
import Footer from "./footer";
import FormMouse from "./utils/FormMouse";
import CenteredCard from "./partials/centeredCard";
class Page404 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.setTimeout(this.bounce.bind(this), 250);
    window.addEventListener("resize", this.bounce);
  }
  bounce() {
    let x = 10,
      y = 10,
      dirX = 1,
      dirY = 1;
    const speed = 6;
    let dvd = document.getElementById("dvd");
    const dvdWidth = dvd.clientWidth;
    const dvdHeight = dvd.clientHeight;

    function animate() {
      const screenHeight = document.body.clientHeight * 2.8;
      const screenWidth = document.body.clientWidth * 3;

      if (y + dvdHeight >= screenHeight || y < 0) {
        dirY *= -1;
      }
      if (x + dvdWidth >= screenWidth || x < 0) {
        dirX *= -1;
      }
      x += dirX * speed;
      y += dirY * speed;
      dvd.style.left = x + "px";
      dvd.style.top = y + "px";
      window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(animate);
  }
  render() {
    return (
      <Container>
        <FormMouse />
        <div id="dvdContainer">
          <div id="dvd"></div>
        </div>
        <HeadContainer>
          <Header menuTheme="black" />
        </HeadContainer>
        <Content>
          <Description>
            <h1>
              <p>Whoops.</p>
              <p>
                <strong>That page doesn’t exist.</strong>
              </p>
            </h1>
            <CardContainer>
              <StyledCard linkURL="/" linkText="Go Home"></StyledCard>
              <StyledCard linkURL="/reel" linkText="Play Our Reel"></StyledCard>
              <StyledCard
                linkURL="/contact"
                linkText="Request Samples of Our Work"
              ></StyledCard>
            </CardContainer>
          </Description>
        </Content>
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <div id="bottom"></div>
      </Container>
    );
  }
}

export default Page404;

const Container = styled.div`
  margin: 0;
  width: 100%;
  background-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='logo_x5F_group' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 563.68 218.69' style='enable-background:new 0 0 563.68 218.69;' xml:space='preserve'%3E %3Cpolygon id='f' points='42.79,101.42 95.62,101.42 95.62,63.39 42.79,63.39 42.79,41.2 100.95,41.2 100.95,3.17 0,3.17 0,3.17 0,142.63 42.79,142.63 '/%3E %3Cpolygon id='t' points='440.32,3.17 440.32,41.2 480.61,41.2 480.61,142.63 523.4,142.63 523.4,41.2 563.68,41.2 563.68,3.17 '/%3E %3Cpath id='r' d='M339.21,101.42h11.87l23.79,41.2h42.79l-28.17-48.8c14.9-8.23,25-24.09,25-42.32c0-26.69-21.64-48.34-48.33-48.34 h-69.73v139.46h42.79V101.42z M339.21,38.03h20.6c7.88,0,14.26,6.39,14.26,14.26c0,7.88-6.39,14.26-14.26,14.26h-20.6V38.03z'/%3E %3Cpath id='o' d='M196.63,145.8c40.26,0,72.9-32.64,72.9-72.9c0-40.26-32.64-72.9-72.9-72.9s-72.9,32.64-72.9,72.9 C123.73,113.16,156.37,145.8,196.63,145.8z M196.63,41.2c17.51,0,31.7,14.19,31.7,31.7c0,17.5-14.19,31.69-31.7,31.69 s-31.7-14.19-31.7-31.69C164.94,55.39,179.13,41.2,196.63,41.2z'/%3E %3Crect id='underline' y='180.66' width='558.36' height='38.03'/%3E %3C/svg%3E ");
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50% 95%;
  position: relative;
  overflow: hidden;
  #dvd {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 210vh;
    width: 220vw;
    background-repeat: no-repeat;
    background-size: 50px;
    background-position: center;
    background: radial-gradient(
      circle at center,
      transparent 0,
      transparent 7.5%,
      #ffc400 7.5%,
      #ffc400
    );
    &:after {
      content: "";
    }
  }
  #dvdContainer {
    position: absolute;
    left: -100.5vw;
    top: -90vh;
    width: 200vw;
    height: 200vh;
  }
  #top,
  #bottom,
  #left,
  #right {
    background: #000;
    position: fixed;
    z-index: 900;
  }
  #left,
  #right {
    top: 0;
    bottom: 0;
    width: 7px;
  }
  #left {
    left: 0;
  }
  #right {
    right: 0;
  }

  #top,
  #bottom {
    left: 0;
    right: 0;
    height: 7px;
  }
  #top {
    top: 0;
  }
  #bottom {
    bottom: 0;
  }
`;

const StyledCard = styled(CenteredCard)``;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  /* z-index: 1; */
  margin: auto;
  width: 100%;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  div {
    transform: none;
    margin: 0;
    a {
      &:before {
        width: 180px;
        height: 180px;
        background-color: #ffc400;
      }
      span {
        transform: none;
      }
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    margin-top:25px;
    div {
      margin-bottom: 150px;
      a {
        &:before {
          background-color: #f8f8f8;
        }
        &:hover, &:focus, &:active{
          &:before {
          background-color: #f8f8f8;
        }
        }
      }
    }
  }
`;
const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`  
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 46%;
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 161px;
    transform: none;
    top: auto;
    left: auto;
    h1 {
      text-align: center;
    }
  }
`;

const Content = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  @media (max-width: 480px) {
    height: 190vh;
    max-height:1050px;
    background-color: #ffc400;
  }
  a {
    color: #000;
  }

  /* Input fields styles */
  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
