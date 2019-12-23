import React, { Component } from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
class ClientGrid extends Component {
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
  renderGrid = (grid, index) => {
    return (
      <GridItem key={index} className="spy">
        <GridWrapper>
          <Category className="category" dangerouslySetInnerHTML={{
                    __html: grid.category.name
                  }}></Category>
          <Summary className="summary">Summary of Service</Summary>
          <Logo alt={grid.logo.alt} src={grid.logo.url} />
          <BodyContainer className="body p2" 
            dangerouslySetInnerHTML={{
                    __html: grid.body
                  }}
          ></BodyContainer>
        </GridWrapper>
      </GridItem>
    );
  };

  render() {
    return (
      <Container>
        <Wrapper>
          {this.props.layout.client_grid.map((grid, index) =>
            this.renderGrid(grid, index)
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default connect(ClientGrid);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  margin: auto;
  max-width: 1440px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 114px;
  padding-right: 114px;
  @media (max-width: 768px) {
    padding: 0;
    margin-left: 36px;
    margin-right: 36px;
    flex-direction: column;
  }
`;

const GridItem = styled.div`
  width: calc(90% / 4);
  position: relative;
  padding-bottom: calc(90% / 4);
  margin-right: 44px;
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
  &:nth-of-type(4) {
    margin-right: 0;
  }
  img {
    max-width: 216px;
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 100%;
    margin-right: 0;
    margin-bottom: 12px;
    img{
      max-width:none;
    }
  }
`;
const GridWrapper = styled.div`
  flex-direction: column;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #ffc40a;
    top: 0;
  }
  &:hover,
  &:focus, &:active {
    .body {
      opacity: 1;
      visibility:visible;
    }
    img {
      opacity: 0;
      visibility:hidden;
    }
    .category {
      opacity: 0;
    }
    .summary {
      opacity: 1;
    }
  }
`;
const Category = styled.div`
  position: relative;
  margin-top: 24px;
  font-weight: normal;
  font-size: 14px;
  text-transform: uppercase;
  color: #BFBFBF;
  opacity: 1;
  letter-spacing: 0.84px;
  line-height: 16px;
  transition: opacity 250ms ease-in-out;
`;
const Summary = styled.div`
  position: relative;
  font-weight: normal;
  font-size: 14px;
  margin-top: -14px;
  text-transform: uppercase;
  color: #ffc40a;
  letter-spacing: 0.84px;
  line-height: 16px;
  opacity: 0;
  transition: opacity 250ms ease-in-out;
`;
const BodyContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 250ms ease-in-out;
  text-align: center;
  visibility:hidden;  
`;
const Logo = styled(Image)`
  position: absolute; pointer-events: none;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 250ms ease-in-out;
  opacity: 1;
  visibility:visible;
`;
// const
