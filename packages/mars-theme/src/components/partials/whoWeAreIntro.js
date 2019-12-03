import React from "react";
import { connect, styled } from "frontity";

const WhoWeAreIntro = props => {
//   console.log(props.layout);
  return (
    <Container>
      <HeadlineContainer>
        <Eyebrow dangerouslySetInnerHTML={{ __html: props.layout.subhead }}></Eyebrow>
        <h2 dangerouslySetInnerHTML={{ __html: props.layout.headline }}></h2>
      </HeadlineContainer>
      <BodyContainer>
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
  margin-top: 260px;
`;

const HeadlineContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  text-align:center;
`;

const BodyContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;
const Eyebrow = styled.div`
    font-size:14px;
    font-weight: 600;
    text-transform:uppercase;
`;

// const
