import React, { Component } from "react";
import { connect, styled } from "frontity";
class ClientIntro extends Component {
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
  mouseEnter() {    
    document.querySelector('#cursor').classList.add('is-swapped'); 
  }
  mouseLeave(){
     document.querySelector('#cursor').classList.remove('is-swapped'); 
  }
  componentDidMount() {
    window.setTimeout(this.isOnScreen.bind(this), 250);
  }
  render() {
    return (
      <Container onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <ContentContainer>
          <HeadlineContainer>
            <Headline
              className="spy"
              dangerouslySetInnerHTML={{ __html: this.props.layout.headline }}
            ></Headline>
          </HeadlineContainer>
          <BodyContainer className="spy">
            <div
              className="p1"
              dangerouslySetInnerHTML={{ __html: this.props.layout.body }}
            ></div>
          </BodyContainer>
        </ContentContainer>
      </Container>
    );
  }
}

export default connect(ClientIntro);

const Container = styled.div`
  background-color: #ffc40a;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  position:relative;
  z-index:3;
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
  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

const HeadlineContainer = styled.div`
  padding: 0 119px;
  padding-top: 134px;
  @media (max-width: 1024px) {
    padding: 0;
    padding-top: 72px;
    margin-left: 80px;
    margin-right: 80px;
  }
  @media (max-width: 480px) {
    margin-left: 36px;
    margin-right: 36px;
  }
`;
const Headline = styled.h2`
  width: 58%;
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
  .white {
    color: #ffffff;
  }
  @media (max-width: 1024px) {
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
  &:before {
    content: "";
    position: absolute;
    left: -21px;
    height: 100%;
    width: 1px;
    background: #ffffff;
  }
  @media (max-width: 1024px) {
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
