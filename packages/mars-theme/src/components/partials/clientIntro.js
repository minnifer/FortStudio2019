import React from "react";
import { connect, styled } from "frontity";

const ClientIntro = props => {
//   console.log(props.layout);
  return (
    <Container>
    <ContentContainer>
      <HeadlineContainer>
        <Headline dangerouslySetInnerHTML={{ __html: props.layout.headline }}></Headline>
      </HeadlineContainer>
      <BodyContainer>
        <div className="p1" dangerouslySetInnerHTML={{ __html: props.layout.body }}></div>
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
  margin-bottom:120px;
  display: flex;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width:1440px;
  margin:auto;
  margin-bottom:134px;
`;

const HeadlineContainer = styled.div`
  padding:0 119px;  
  padding-top:134px;
`;
const Headline = styled.h2`
  width:58%;
  .white{
    color:#FFFFFF;    
  }
`;

const BodyContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  column-count:2;
  width:50%;
  column-gap:75px;
  position:relative;
  margin-top:80px;
  &:before{
    content:'';
    position:absolute;
    left:-21px;
    height:100%;
    width:1px;
    background:#FFFFFF;
  }
`;

// const
