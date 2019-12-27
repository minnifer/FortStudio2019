import React, { Component } from "react";
import { connect, styled } from "frontity";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      rotated: false,
      hover: false,
    };
  }
  componentDidMount = () => {};
  componentWillUnmount = () => {
    this.stopVideo();
  };
  playVideo = () => {
    this.refs.vidRef.play();
    var videoRef = this.refs.vidRef;
    var thisProxy = this;
    var mql = window.matchMedia("(orientation: landscape)");
    if (mql.matches) {
      videoRef.play();
    } else {
      videoRef.pause();
    }
    mql.addListener(function(m) {
      if (m.matches) {
        videoRef.play();
      } else {
        videoRef.pause();
        thisProxy.setState({ active: false });
        videoRef.currentTime = 0;
        document.querySelector("#cursor").classList.remove("is-playing");
        if (document.querySelector("#checkIfOpen")) {
          document.querySelector("#checkIfOpen").classList.remove("is-open");
        }
      }
    });

    this.setState({ active: true });
    document.querySelector("#cursor").classList.add("is-playing");
    if (document.querySelector("#checkIfOpen")) {
      document.querySelector("#checkIfOpen").classList.add("is-open");
    }
  };

  stopVideo = () => {
    this.refs.vidRef.pause();
    this.refs.vidRef.currentTime = 0;
    this.setState({ active: false });
    document.querySelector("#cursor").classList.remove("is-playing");
    if (document.querySelector("#checkIfOpen")) {
      document.querySelector("#checkIfOpen").classList.remove("is-open");
    }
  };
  pauseVideo = () => {
    if (this.refs.vidRef.paused) {
      this.refs.vidRef.play();
    } else {
      this.refs.vidRef.pause();
    }
  };
  onKeyPressed = e => {
    if (e.key === "Escape") {
      this.refs.vidRef.pause();
      this.refs.vidRef.currentTime = 0;
      this.setState({ active: false });
      if (document.querySelector("#checkIfOpen")) {
        document.querySelector("#checkIfOpen").classList.remove("is-open");
      }
    }
  };
  // touchNow = event => {
  //   event.preventDefault();
  // }

  render = () => {
    return (
      <Container className={[this.state.active, this.props.nav].join(" ")}>
        <ButtonContainer
          data-stick-cursor
          className={this.state.active ? "active link" : ""}
        >
          <CloseButton onClick={this.stopVideo}>Close</CloseButton>
        </ButtonContainer>
        <RotateScreenText className={this.state.active ? "active link" : ""}>
          Please Rotate Your Screen
        </RotateScreenText>
        <VideoContainer
          className={`${this.state.active ? "active" : ""} videoOpen`}
        >
          <Video
            onKeyDown={this.onKeyPressed}
            tabIndex="0"
            preload="none"
            ref="vidRef"
            src={this.props.src}
            type="video/mp4"
            onClick={this.pauseVideo}
            onEnded={() => this.stopVideo()}
            className={this.state.active ? "active" : ""}
            className={`${this.state.active ? "active" : ""} videoOpen`}
          />
        </VideoContainer>
        <div className="link" data-stick-cursor>
          <PlayButton
            className={[this.state.active, this.props.nav].join(" ")}
            // onTouchStart={this.touchNow}
            onClick={this.playVideo}
            
          >
            <svg
              id="Collapse_Expand_1"
              data-name="Collapse/Expand 1"
              xmlns="http://www.w3.org/2000/svg"
              width="58.739"
              height="58.739"
              viewBox="0 0 58.739 58.739"
            >
              <g
                id="Collapse_Expand_1-2"
                data-name="Collapse/Expand 1"
                transform="translate(55.36 -716.142) rotate(60)"
              >
                <g
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  transform="translate(611.136 373.764)"
                  fill="none"
                  stroke="#ffc40a"
                  strokeWidth="11"
                >
                  <circle cx="21.5" cy="21.5" r="21.5" stroke="none" />
                  <circle cx="21.5" cy="21.5" r="16" fill="none" />
                </g>
                <circle
                  id="Ellipse_8"
                  data-name="Ellipse 8"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(629.265 392.363)"
                />
              </g>
            </svg>
            <span>Play Our Reel</span>
          </PlayButton>
        </div>
      </Container>
    );
  };
}
export default VideoPlayer;

const Container = styled.div`
  /* z-index: 4; */
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: none;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, 0%);
  &.true {
    z-index: 90;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    transform: none;
    position: fixed;
  }
  &.nav {
    position: fixed;
    z-index: 900;
    top: 50%;
    transform: translate(-50%, 0%);
    &.true {
      top: 0;
      transform: translate(0%, 0%);
    }
    @media (max-width: 1366px) {
      transform: translate(-50%, 0%);
    }
  }
  @media (max-width: 1366px) {
    top: 75%;
  }
`;
const VideoContainer = styled.div`
  @media (max-width: 1600px) {
    position: fixed;
    padding-bottom: 56.25%;
    top: 0;
    &.active {
      width: 100vw;
      &:before {
        content: "";
        height: 100vh;
        width: 100vw;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  &.active {
    display: flex;
    z-index: 10;
  }
  @media (max-width: 1600px) {
    object-fit: contain;
    top: 50vh;
    transform: translate(0, -50%);
  }
`;
const RotateScreenText = styled.h3`
  display: none;
  @media all and (orientation: portrait) {
    &.active {
      display: block;
      color: #fff;
      z-index: 9000;
      position: absolute;
      padding-left: 36px;
      padding-right: 36px;
      text-transform: uppercase;
      text-align: center;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
    }
  }
`;
const ButtonContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  /* height: 47.688; */
  margin: auto;
  margin-top: 0;
  display: none;
  /* z-index: 900; */
  position: relative;
  padding: 24px 0;
  align-items: center;
  &.active {
    display: flex;
    max-width: 1440px;
  }
  @media (max-width: 1366px) {
    width: auto;
  }
`;
const PlayButton = styled.button`
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
  z-index: 6;
  /* transition: color 250ms ease-in-out; */
  width: 200px;
  height: 200px;
  outline: none;
  position: relative;
  border-radius: 100%;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -85%);
    content: "";
    animation-name: dots-spin;
    -webkit-animation-name: dots-spin;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-timing-function: linear;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  @media (max-width: 1366px) {
    &:before {
      transform: translate(-50%, -50%);
    }
  }
  span {
    position: absolute;
    opacity: 0;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.84px;
    left: 0;
    top: 37.5%;
    color: #1d1d1d;
    /* transition: opacity 500ms ease-in-out; */
  }
  svg {
    border-radius: 50%;

    #Ellipse_8 {
      fill: #fff;
    }
  }
  @keyframes dots-spin {
    from {
      box-shadow: 0 0 0 10px rgba(255, 196, 0, 0.301);
    }

    to {
      box-shadow: 0 0 0 30px rgba(255, 196, 0, 0);
    }
  }
  @-webkit-keyframes dots-spin {
    from {
      box-shadow: 0 0 0 10px rgba(255, 196, 0, 0.301);
    }

    to {
      box-shadow: 0 0 0 30px rgba(255, 196, 0, 0);
    }
  }
  @-moz-keyframes dots-spin {
    from {
      box-shadow: 0 0 0 10px rgba(255, 196, 0, 0.301);
    }

    to {
      box-shadow: 0 0 0 30px rgba(255, 196, 0, 0);
    }
  }
  &:hover,
  &:focus,
  &:active {
    svg {
      opacity: 0;
      display: none;
      #Ellipse_8 {
        fill: transparent;
      }
    }
    span {
      opacity: 1;
    }
    @media (max-width: 1366px) {
      span {
        /* color: #ffc400 !important; */
        background-color: #ffc400;
        width: 130px;
        height: 130px;
        max-width: none;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        left: -50%;
        top: -50%;
        transform: translate(-50%, 0);
      }
    }
  }
  &.true {
    svg {
      display: none;
    }
    span {
      display: none;
    }
    &:before {
      content: none;
    }
  }
  &.nav {
    svg {
      /* animation: none; */
    }
    &:hover {
      svg {
        display: none;
      }
    }
    @media (max-width: 1366px) {
      /* top: -25px; */
    }
  }
  @media (max-width: 1366px) {
    height: auto;
    width: auto;
    height: 58.73px;
    padding: 0;
    span {
      height: auto;
      width: auto;
      display: none;
    }
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 115px;
  cursor: pointer !important;
  right: 65px;
  outline: none;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  /* width: fit-content; */
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0.84px;
  font-size: 12px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  transition: color 250ms ease-in-out;
  z-index: 900;
  color: #ffc40a;
  max-width: none;
  &:hover {
  }
  @media (max-width: 1366px) {
    top: 33px;
    right: 8px;
    display: flex;
    width: 100px;
    z-index: 999;
    height: auto;
    position: fixed;
  }
`;
