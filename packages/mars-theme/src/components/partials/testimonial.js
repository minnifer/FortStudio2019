import React from "react";
import { connect, styled } from "frontity";

const Testimonial = props => {
  // console.log(props.layout);
  return (
    <Container>
      
      <QuoteBody
        dangerouslySetInnerHTML={{ __html: props.layout.body }}
      ></QuoteBody>
      <QuoteAuthor
        dangerouslySetInnerHTML={{ __html: props.layout.author }}
      ></QuoteAuthor>
    </Container>
  );
};

export default connect(Testimonial);

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  box-sizing: border-box;  
  display: flex;
  flex-direction: column;
  width: 45%;  
  min-width: 530px;
  max-width:600px;
  margin-top:125px;
  margin-bottom:120px;
  @media (max-width: 768px) {
    width:82%;
    margin-top:38px;
    margin-bottom:38px;
    margin-left:36px;
    margin-right:36px;
    min-width:auto;
    max-width:auto;
  }
`;

const QuoteBody = styled.h3``;
const QuoteAuthor = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.84px;
  line-height: 16px;
  font-weight: 500;
  margin-top:14px;
  text-transform:uppercase;
`;
const ToutContainer = styled.div``;

// const
