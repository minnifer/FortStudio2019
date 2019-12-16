import React from "react";
import { connect, styled } from "frontity";
import Card from "./card";
const IntroSection = props => {
  return (
    <Container>
      <LeftContainer>
        <h2 dangerouslySetInnerHTML={{ __html: props.layout.headline }}></h2>
        <BodyContainer
          className="p1"
          dangerouslySetInnerHTML={{ __html: props.layout.body }}
        ></BodyContainer>
      </LeftContainer>
      <RightContainer>
        <ToutContainer>
          <HeadlineContainer
            dangerouslySetInnerHTML={{
              __html: props.layout.strategy_section.headline
            }}
          ></HeadlineContainer>
          <BodyContainer
            className="p2"
            dangerouslySetInnerHTML={{
              __html: props.layout.strategy_section.body
            }}
          ></BodyContainer>
          <HoverBody>
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
            <Card text={props.layout.strategy_section.hover_body}></Card>
          </HoverBody>
        </ToutContainer>
        <ToutContainer>
          <HeadlineContainer
            dangerouslySetInnerHTML={{
              __html: props.layout.identity_section.headline
            }}
          ></HeadlineContainer>
          <BodyContainer
            className="p2"
            dangerouslySetInnerHTML={{
              __html: props.layout.identity_section.body
            }}
          ></BodyContainer>
          <HoverBody>
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

            <Card text={props.layout.identity_section.hover_body}></Card>
          </HoverBody>
        </ToutContainer>
        <ToutContainer>
          <HeadlineContainer
            dangerouslySetInnerHTML={{
              __html: props.layout.design_section.headline
            }}
          ></HeadlineContainer>
          <BodyContainer
            className="p2"
            dangerouslySetInnerHTML={{
              __html: props.layout.design_section.body
            }}
          ></BodyContainer>
          <HoverBody>
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

            <Card text={props.layout.design_section.hover_body}></Card>
          </HoverBody>
        </ToutContainer>
      </RightContainer>
    </Container>
  );
};

export default connect(IntroSection);

const Container = styled.div`
  width: 1440px;
  margin: auto;
  box-sizing: border-box;
  padding: 0 119px;
  display: flex;
  flex-direction: row;
  max-width:none;
  @media (max-width: 768px) {
    flex-direction:column;
    padding:0;
    margin-left:36px;
    margin-right:36px;
    width:auto;
  }
`;

const HoverBody = styled.div`
  position: absolute;
  left: -125px;
  top: -5px;    
  max-width:none;
  width:100%;

  h5 {
    display:none;
    transition:opacity 250ms ease-in;
    position: absolute;
    top: 0;
    text-align: center;
    text-transform: uppercase;
    width:50%;
    margin:auto;
    
  }
  svg {
    /* transform:translateX(200%); */
  }
  &:hover,
  &:focus {
    
    h5 {
    display:block;
    transition:none;
    }
    svg {
      opacity: 0;
    }
  }
  @media (max-width: 768px) {
    left:0;
    top:-60%;

  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  
  width: 55%;
  top: 260px;
  padding-bottom:177px;
  height:fit-content;
  @media (max-width: 768px) {
       position:relative;
       margin-top:161px;
       top:auto;
       padding-bottom:109px;
       width:100%;
     }
`;

const RightContainer = styled.div`
  width: 22.5%;
  align-self: flex-end;
  margin-top: 548px;
  @media (max-width: 768px) {
    align-self:center;
    width:100%;
    margin-top:0;
  }
`;

const BodyContainer = styled.div`
  margin-top: 15px;
`;
const HeadlineContainer = styled.h4`
`;
const ToutContainer = styled.div`
  margin-bottom: 103px;
  position: relative;
  &:last-of-type {
    margin-bottom: 177px;
  }
  @media (max-width: 768px) {
    text-align:center;
    width:80vw;
    margin-bottom: 137px;
     &:last-of-type {
    margin-bottom: 80px;
  }
  }
  
`;

// const
