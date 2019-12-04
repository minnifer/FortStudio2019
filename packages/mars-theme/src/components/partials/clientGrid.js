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
        <Category>{grid.category.name}</Category>
        <Logo alt={grid.logo.alt} src={grid.logo.url} />
        <BodyContainer>{grid.body}</BodyContainer>
      </GridItem>
    );
  };

  render() {    
    return (
      <Container>
        {this.props.layout.client_grid.map((grid, index) =>
          this.renderGrid(grid, index)
        )}
      </Container>
    );
  }
}

export default connect(ClientGrid);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
`;

const GridItem = styled.div``;
const Category = styled.div``;
const BodyContainer = styled.div``;
const Logo = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
// const
