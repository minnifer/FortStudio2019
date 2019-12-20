import React, { Component } from "react";
import { connect, styled } from "frontity";
import Card from "./card";
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
        <h2 dangerouslySetInnerHTML={{ __html: this.props.layout.headline }}></h2>
      </HeadlineContainer>
      <BodyContainer >
        <HoverBody className="link" data-stick-cursor>
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
          <span dangerouslySetInnerHTML={{ __html: this.props.layout.hover_body }}></span>
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
    margin-top: 162px;
  }
`;

const HeadlineContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  text-align: center;
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
  width: 130px;
  height: 130px;
  outline: none;  
  border-radius: 100%;

  top:-150px;
  left:75px;
  @media (max-width: 768px) {
    top: -120%;
  }
  span {
    position: absolute;
    opacity: 0;
    width: 130px;
    line-height:16px;
    height: 130px;
  border-radius: 100%;

    left: 20%;
    top: 40%;
    color: #1d1d1d;
    display:flex;
    /* transition: opacity 500ms ease-in; */
    text-align:center;
  }
  svg {
    margin-top:50px;
    margin-left:25px;
  }
  &:hover, &:focus {
    svg {
      opacity: 0;
    }
    span {
      opacity: 1;
      /* transform:translate(0%, 0%); */
    }
  }
`;

// const
