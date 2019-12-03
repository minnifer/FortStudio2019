import React from "react";
import { connect, styled } from "frontity";

const ClientIntro = props => {
//   console.log(props.layout);
  return (
    <Container>
      <HeadlineContainer>
        <h2 dangerouslySetInnerHTML={{ __html: props.layout.headline }}></h2>
      </HeadlineContainer>
      <BodyContainer>
        <div dangerouslySetInnerHTML={{ __html: props.layout.body }}></div>
      </BodyContainer>
    </Container>
  );
};

export default connect(ClientIntro);

const Container = styled.div`
  background-color: #ffc40a;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
`;

const HeadlineContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const BodyContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;
const ToutContainer = styled.div``;

// const
