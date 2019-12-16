import React from "react";
import { connect, styled } from "frontity";

const ClientIntro = props => {
  //   console.log(props.layout);
  return (
    <Container>
      <ContentContainer>
        <HeadlineContainer>
          <Headline
            dangerouslySetInnerHTML={{ __html: props.layout.headline }}
          ></Headline>
        </HeadlineContainer>
        <BodyContainer>
          <div
            className="p1"
            dangerouslySetInnerHTML={{ __html: props.layout.body }}
          ></div>
        </BodyContainer>
      </ContentContainer>
    </Container>
  );
};

export default connect(ClientIntro);

const Container = styled.div`
  background-color: #ffc40a;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E %3Ccircle id='Cursor' cx='6' cy='6' r='6' fill='%231D1D1D' opacity='0.9'/%3E %3C/svg%3E "),
    pointer;
  @media (max-width: 768px) {
    margin-bottom: 65px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1440px;
  margin: auto;
  margin-bottom: 134px;
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const HeadlineContainer = styled.div`
  padding: 0 119px;
  padding-top: 134px;
  @media (max-width: 768px) {
    padding: 0;
    padding-top: 72px;
    margin-left: 36px;
    margin-right: 36px;
  }
`;
const Headline = styled.h2`
  width: 58%;
  .white {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BodyContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  column-count: 2;
  width: 50%;
  column-gap: 75px;
  position: relative;
  margin-top: 80px;
  &:before {
    content: "";
    position: absolute;
    left: -21px;
    height: 100%;
    width: 1px;
    background: #ffffff;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
    width: 70%;
    column-count: 1;
    padding-left: 66px;
    padding-right: 37px;
    &:before {
      left: 33px;
    }
  }
`;

// const
