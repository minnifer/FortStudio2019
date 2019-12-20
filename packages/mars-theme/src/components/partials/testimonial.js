import React, { Component } from "react";
import { connect, styled } from "frontity";
class Testimonial extends Component {
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
      <Wrapper style={{ backgroundColor: this.props.layout.background_color}}>
        <Container>
          <QuoteBody
            className="spy"
            dangerouslySetInnerHTML={{ __html: this.props.layout.body }}
          ></QuoteBody>
          <QuoteAuthor
            className="spy"
            dangerouslySetInnerHTML={{ __html: this.props.layout.author }}
          ></QuoteAuthor>
        </Container>
      </Wrapper>
    );
  }
}
export default connect(Testimonial);
const Wrapper = styled.div``;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 530px;
  max-width: 600px;
  padding-top: 125px;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    width: 82%;
    padding-top: 38px;
    padding-bottom: 38px;
    padding-left: 36px;
    padding-right: 36px;
    min-width: auto;
    max-width: auto;
  }
`;

const QuoteBody = styled.h3`
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
const QuoteAuthor = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.84px;
  line-height: 16px;
  font-weight: 500;
  margin-top: 14px;
  text-transform: uppercase;
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

// const
