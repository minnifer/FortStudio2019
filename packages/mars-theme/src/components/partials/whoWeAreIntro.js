import React, { Component } from "react";
import { connect, styled } from "frontity";
import Card from "./card";
import $ from "jquery";
import TextLoop from "react-text-loop";
import ReactRotatingText from "react-rotating-text";
class WhoWeAreIntro extends Component {
  constructor(props) {
    super(props);
  }
  isOnScreen() {
    /* get the elements */
    var elements = document.getElementsByClassName("spy");
    /* iterate */
    Array.prototype.forEach.call(elements, function(element, index) {
      var bounds = element.getBoundingClientRect();

      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        element.classList.add("inview");
      } else {
        // element.classList.remove("inview");
      }
    });

    window.setTimeout(this.isOnScreen.bind(this), 250);
  }
  componentDidMount() {
    window.setTimeout(this.isOnScreen.bind(this), 250);
  }
  render() {
    return (
      <Container>
        <HeadlineContainer className="spy">
          <h2
            dangerouslySetInnerHTML={{ __html: this.props.layout.headline }}
          ></h2>
          <h2>
            <strong>
              <span>Endlessly</span>
              <span>
                &nbsp;
                <ReactRotatingText
                  emptyPause="0"
                  deletingInterval="15"
                  typingInterval="50"
                  pause="2000"
                  items={[
                    "creative.",
                    "fine-tuning.",
                    "passionate.",
                    "strategizing.",
                    "poppin’.",
                    "charming.",
                    "curious.",
                    "caffeinating.",
                    "efficient.",
                    "simplifying.",
                    "innovative.",
                    "cranking.",
                    "quirky.",
                    "learning.",
                    "endless."
                  ]}
                />
              </span>
            </strong>
          </h2>
        </HeadlineContainer>

        <BodyContainer>
          <HoverBody className="link" data-large-cursor>
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
            <div className="circleWrapper">
              <TextLoop fade="false" interval="2000">
                <span
                  id="content-1"
                  dangerouslySetInnerHTML={{
                    __html: this.props.layout.credos.credo_1
                  }}
                ></span>
                <span
                  id="content-2"
                  dangerouslySetInnerHTML={{
                    __html: this.props.layout.credos.credo_2
                  }}
                ></span>
                <span
                  id="content-3"
                  dangerouslySetInnerHTML={{
                    __html: this.props.layout.credos.credo_3
                  }}
                ></span>
                <span
                  id="content-4"
                  dangerouslySetInnerHTML={{
                    __html: this.props.layout.credos.credo_4
                  }}
                ></span>
                <span
                  id="content-5"
                  dangerouslySetInnerHTML={{
                    __html: this.props.layout.credos.credo_5
                  }}
                ></span>
              </TextLoop>
            </div>
          </HoverBody>
          <Eyebrow
            dangerouslySetInnerHTML={{ __html: this.props.layout.subhead }}
          ></Eyebrow>
          <div
            className="p1"
            dangerouslySetInnerHTML={{ __html: this.props.layout.body }}
          ></div>
        </BodyContainer>
      </Container>
    );
  }
}

export default connect(WhoWeAreIntro);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1440px;
  margin: auto;
  margin-top: 250px;
  @media (max-width: 768px) {
    margin-top: 161px;
    padding:0;
  }
  .react-rotating-text-cursor {
    display: none;
  }
`;

const HeadlineContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  text-align: center;
  @media (max-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
    h2 {
      &:last-of-type {
        strong {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  &.spy {
    transform: translateY(5vw);
    transition: transform 1s cubic-bezier(0, 0.7, 0.1, 1),
      opacity 1s cubic-bezier(0.5, 0, 0.2, 1);
    opacity: 0;

    &.inview {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const BodyContainer = styled.div`
  margin: auto;
  padding-left: 114px;
  position: absolute;
  top: 116%;
  width: 20%;
  @media (max-width: 768px) {
    width: 80%;
    position: relative;
    padding-left: 0;
    top: auto;
    margin: auto;
    text-align: center;
    margin-top: 84px;
  }
  &.spy {
    transform: translateY(5vw);
    transition: transform 1s cubic-bezier(0, 0.7, 0.1, 1),
      opacity 1s cubic-bezier(0.5, 0, 0.2, 1);
    opacity: 0;

    &.inview {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const Eyebrow = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.84px;
  line-height: 16px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
    max-width: 75%;
    margin: auto;
    margin-bottom: 10px;
  }
`;

const HoverBody = styled.div`
  position: absolute;
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
  transition: color 250ms ease-in-out;
  width: 200px;
  height: 200px;
  border-radius: 100%;

  outline: none;
  top: -130px;
  left: 80px;
  @media (max-width: 768px) {
    top: -30%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  .circleWrapper {
    position: absolute;
    width: 200px;
    height: 200px;
    opacity: 0;
    top: 0;
    transform:scale(0);
    @media (max-width: 768px) {
      background-color: #ffc40a;
      border-radius: 50%;
      width: 230px;
      height: 230px;
      top: 0;
      left: 45%;
      transform:scale(0);
      transition:transform 250ms ease-in-out;
      /* transform:translate(18%, 0); */
    }
  }
  span {
    position: absolute;
    opacity: 0;
    border-radius: 100%;
    left: 0%;
    top: 0%;
    color: #1d1d1d;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 16px;
    /* width:130px; */
    width: 200px;
    transform: translate(5%, 5%);
    height: 200px;
    vertical-align: center;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, 10%);
      /* left: -50%; */
      top: 0%;
    }
  }
  svg {
    margin-top: 50px;
    margin-left: 25px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
  &:hover,
  &:focus,
  &:active {
    left: 40px;
    svg {
      opacity: 0;
    }
    span {
      opacity: 1;
      /* transform:translate(0%, 0%); */
    }

    .circleWrapper {
      opacity: 1;
      transform:scale(1);
    }
  }
`;

// const
