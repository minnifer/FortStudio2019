import React from "react";
import { connect, styled } from "frontity";
import Card from "./card";
const WhoWeAreIntro = props => {
  return (
    <Container>
      <HeadlineContainer>

        <h2 dangerouslySetInnerHTML={{ __html: props.layout.headline }}></h2>
      </HeadlineContainer>
      <BodyContainer>
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
          <Card text={props.layout.hover_body}></Card>
        </HoverBody>
        <Eyebrow dangerouslySetInnerHTML={{ __html: props.layout.subhead }}></Eyebrow>
        <div className="p1" dangerouslySetInnerHTML={{ __html: props.layout.body }}></div>
      </BodyContainer>
    </Container>
  );
};

export default connect(WhoWeAreIntro);

const Container = styled.div`  
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: column;  
  position:relative;
  max-width:1440px;
  margin:auto;
  margin-top: 260px;
`;

const HeadlineContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  text-align:center;
`;

const BodyContainer = styled.div`  
  margin:auto;
  padding-left:114px;  
  position:absolute;
  top:110%;
  width:20%;
`;
const Eyebrow = styled.div`
    font-size:14px;
    font-weight: 600;
    text-transform:uppercase;
    
`;

const HoverBody = styled.div`
  position: absolute;
  
  top: -100px;   
  left:100px; 
  max-width:none;
  width:100%;
  .cardWrapper{
      transform:translateX(37.5%) translateY(-50%);
    }
  h5 {
    display:none;    
    position: absolute;
    transform:translateX(0%) translateY(-100%);
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
`;

// const
