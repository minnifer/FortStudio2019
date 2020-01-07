import React from "react";
import { connect, styled } from "frontity";
import Lottie from "react-lottie";
import * as animationData from "./piinjump.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const buttonStyle = {
      display: "block",
      margin: "10px auto"
    };

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const eventListeners = [
      {
        eventName: "complete",
        callback: () =>
          (document.querySelector("#animation").style.display = "none")
      }
    ];

    return (
      <LottieContainer id="animation">
        <Lottie
          className="animationContainer"
          eventListeners={eventListeners}
          options={defaultOptions}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />                    
      </LottieContainer>
    );
  }
}

const LottieContainer = styled.div`
  background-color: #000;
  position: absolute;
  width: 100vw;
  height: 100vh;
  transition: opacity 4000ms ease-in-out;
  z-index: 90000;
  display:none;
  -webkit-animation: 5.25s ease 0s normal forwards 1 fadein;
    animation:5.25s ease 0s normal forwards 1 fadein;
  > div {
    /* height:auto !important;
    width:auto !important; */

    position: absolute;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 1024px) {
    display:block;
  }
  @keyframes fadein {
    0% {
      background-color: rgba(0,0,0,1);
    }
    66% {
      background-color: rgba(0,0,0,1);
    }
    100% {
      background-color: rgba(0,0,0,0);  
      z-index:-1;    
    }
  }

  @-webkit-keyframes fadein {
    0% {
      background-color: rgba(0,0,0,1);
    }
    66% {
      background-color: rgba(0,0,0,1);
    }
    100% {
      background-color: rgba(0,0,0,1);
    }
  }
`;
