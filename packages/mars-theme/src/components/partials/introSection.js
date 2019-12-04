import React from "react";
import { connect, styled } from "frontity";

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
          <h4
            dangerouslySetInnerHTML={{
              __html: props.layout.strategy_section.headline
            }}
          ></h4>
          <BodyContainer
            className="p2"
            dangerouslySetInnerHTML={{
              __html: props.layout.strategy_section.body
            }}
          ></BodyContainer>
          <h5
            dangerouslySetInnerHTML={{
              __html: props.layout.strategy_section.hover_body
            }}
          ></h5>
        </ToutContainer>
        <ToutContainer>
          <h4
            dangerouslySetInnerHTML={{
              __html: props.layout.identity_section.headline
            }}
          ></h4>
          <BodyContainer
            className="p2"
            dangerouslySetInnerHTML={{
              __html: props.layout.identity_section.body
            }}
          ></BodyContainer>
          <h5
            dangerouslySetInnerHTML={{
              __html: props.layout.identity_section.hover_body
            }}
          ></h5>
        </ToutContainer>
        <ToutContainer>
          <h4
            dangerouslySetInnerHTML={{
              __html: props.layout.design_section.headline
            }}
          ></h4>
          <BodyContainer
            className="p2"
            dangerouslySetInnerHTML={{
              __html: props.layout.design_section.body
            }}
          ></BodyContainer>
          <h5
            dangerouslySetInnerHTML={{
              __html: props.layout.design_section.hover_body
            }}
          ></h5>
        </ToutContainer>
      </RightContainer>
    </Container>
  );
};

export default connect(IntroSection);

const Container = styled.div`
  width: 1440px;
  margin:auto; 
  box-sizing: border-box;
  padding: 24px 119px;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-top: 260px;
  width:55%;
  bottom:0;
`;

const RightContainer = styled.div`
  width:22.5%;
  align-self:flex-end;
  margin-top:548px;
`;

const BodyContainer = styled.div``;
const ToutContainer = styled.div``;

// const
