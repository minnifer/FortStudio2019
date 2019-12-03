import React from "react";
import { connect, styled } from "frontity";

const ClientGrid = props => {
  // console.log(props.layout);
  return (
    <Container>  
        <QuoteBody dangerouslySetInnerHTML={{ __html: props.layout.body }}></QuoteBody>
        <QuoteAuthor dangerouslySetInnerHTML={{ __html: props.layout.author }}></QuoteAuthor>
    </Container>
  );
};

export default connect(ClientGrid);

const Container = styled.div`  
  max-width: 1440px;
  margin:auto;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
`;

const QuoteBody = styled.h3`


`;
const QuoteAuthor = styled.p`
    font-size:14px;
    font-weight:400;
    letter-spacing:.84px;
    line-height:16px;
    font-weight:500;
`;
const ToutContainer = styled.div``;

// const
