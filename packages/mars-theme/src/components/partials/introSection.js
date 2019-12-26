import React, { Component } from "react";
import { connect, styled } from "frontity";
import Card from "./card";
class IntroSection extends Component {
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
        <LeftContainer>
          <h2
            className="spy"
            dangerouslySetInnerHTML={{ __html: this.props.layout.headline }}
          ></h2>
          <BodyContainer
            className="p1 spy"
            dangerouslySetInnerHTML={{ __html: this.props.layout.body }}
          ></BodyContainer>
        </LeftContainer>
        <RightContainer>
          <ToutContainer className="spy">
            <HeadlineContainer
              dangerouslySetInnerHTML={{
                __html: this.props.layout.strategy_section.headline
              }}
            ></HeadlineContainer>
            <BodyContainer
              className="p2"
              dangerouslySetInnerHTML={{
                __html: this.props.layout.strategy_section.body
              }}
            ></BodyContainer>
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
              <span
                dangerouslySetInnerHTML={{
                  __html: this.props.layout.strategy_section.hover_body
                }}
              ></span>
              {/* <Card text={this.props.layout.strategy_section.hover_body}></Card> */}
            </HoverBody>
          </ToutContainer>
          <ToutContainer className="spy">
            <HeadlineContainer
              dangerouslySetInnerHTML={{
                __html: this.props.layout.identity_section.headline
              }}
            ></HeadlineContainer>
            <BodyContainer
              className="p2"
              dangerouslySetInnerHTML={{
                __html: this.props.layout.identity_section.body
              }}
            ></BodyContainer>
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
              <span
                dangerouslySetInnerHTML={{
                  __html: this.props.layout.identity_section.hover_body
                }}
              ></span>
            </HoverBody>
          </ToutContainer>
          <ToutContainer className="spy">
            <HeadlineContainer
              dangerouslySetInnerHTML={{
                __html: this.props.layout.design_section.headline
              }}
            ></HeadlineContainer>
            <BodyContainer
              className="p2"
              dangerouslySetInnerHTML={{
                __html: this.props.layout.design_section.body
              }}
            ></BodyContainer>
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
              <span
                dangerouslySetInnerHTML={{
                  __html: this.props.layout.design_section.hover_body
                }}
              ></span>
            </HoverBody>
          </ToutContainer>
        </RightContainer>
      </Container>
    );
  }
}

export default connect(IntroSection);

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  box-sizing: border-box;
  padding: 0 119px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    margin-left: 90px;
    margin-right: 90px;
    width: auto;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    margin-left: 36px;
    margin-right: 36px;
    width: auto;
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
  top: -60px;
  left: -200px;
  @media (max-width: 1024px) {
    top: -15%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  span {
    position: absolute;
    opacity: 0;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    left: 5%;
    top: 5%;
    color: #1d1d1d;
    display: flex;
    text-align: center;
    line-height: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: -6.5%;
      top: -25%;
      background-color: #ffc40a;
      border-radius: 50%;
      width: 230px;
      height: 230px;
      transform: scale(0);
      transition: transform 250ms ease-in-out;
    }
  }
  svg {
    margin-top: 50px;
    margin-left: 62.5px;
    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }
  &:hover,
  &:focus,
  &:active {
    svg {
      opacity: 0;
      display: none;
    }
    span {
      opacity: 1;
      transform: scale(1);
      /* transform:translate(0%, 0%); */
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;

  width: 55%;
  top: 235px;
  padding-bottom: 177px;
  height: fit-content;
  @media (max-width: 1024px) {
    position: relative;
    margin-top: 161px;
    top: auto;
    padding-bottom: 109px;
    width: 100%;
  }
  h2 {
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
  }
`;

const RightContainer = styled.div`
  width: 22.5%;
  align-self: flex-end;
  margin-top: 450px;
  z-index: 6;
  @media (max-width: 1024px) {
    align-self: center;
    width: 100%;
    margin-top: 15px;
  }
`;

const BodyContainer = styled.div`
  margin-top: 15px;
  @media (max-width: 1024px) {
    &.p2{
      width:68%;
      margin:auto;
      margin-top: 10px;
    }
  }
  @media (max-width: 480px) {
    margin-top: 10px;
    &.p2{
      width:100%;
      margin-top: 10px;
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
const HeadlineContainer = styled.h4``;
const ToutContainer = styled.div`
  margin-bottom: 103px;
  position: relative;
  &:last-of-type {
    margin-bottom: 177px;
  }
  @media (max-width: 1024px) {
    text-align: center;
    width: auto;
    margin-bottom: 137px;
    &:last-of-type {
      margin-bottom: 80px;
    }
  }
  @media (max-width: 480px) {
    width: 80vw;
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

// const
