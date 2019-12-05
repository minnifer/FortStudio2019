import React, { Component } from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
class ClientGrid extends Component {
  constructor(props) {
    super(props);
  }
  renderGrid = (grid, index) => {
    return (
      <GridItem key={index}>
        <GridWrapper>
          <Category className="category">{grid.category.name}</Category>
          <Summary className="summary">Summary of Service</Summary>
          <Logo alt={grid.logo.alt} src={grid.logo.url} />
          <BodyContainer className="body p2">{grid.body}</BodyContainer>
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
  margin-right: -44px;
  align-items: center;
  padding-left:114px;
  padding-right:114px;
`;

const GridItem = styled.div`
  width: calc(90% / 4);
  position:relative;
  padding-bottom:calc(90% / 4);
  margin-right: 44px;
`;
const GridWrapper = styled.div`
  flex-direction: column;
  display: flex;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  align-items: center;
  &:before{
    content:'';
    position:absolute;    
    width:100%;
    height:2px;
    background:#FFC40A;
    top:0;
  }
  &:hover, &:focus {
    .body{
      opacity:1;      
    }
    img{
      opacity:0;
    }
    .category{
      opacity:0;
    }
    .summary{
      opacity:1;
    }
  }
`;
const Category = styled.div`
  position:relative;
  margin-top:24px;
  font-weight:normal;
  font-size:14px;
  text-transform:uppercase;
  color: #000000;
  opacity:25%;
  letter-spacing:.84px;
  line-height:16px;
  transition:opacity 250ms ease-in-out;
`;
const Summary = styled.div`
  position:relative;  
  font-weight:normal;
  font-size:14px;
  margin-top:-14px;
  text-transform:uppercase;
  color: #FFC40A;  
  letter-spacing:.84px;
  line-height:16px;
  opacity:0;
  transition:opacity 250ms ease-in-out;
`;
const BodyContainer = styled.div`  
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  opacity:0;
  transition:opacity 250ms ease-in-out;
  text-align:center;
`;
const Logo = styled(Image)`  
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  transition:opacity 250ms ease-in-out;
  opacity:1;
`;
// const
