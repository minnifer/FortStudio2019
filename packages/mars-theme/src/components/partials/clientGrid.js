import React, { Component } from "react";
import { connect, styled } from "frontity";
class ClientGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderGrid = (grid, index) => {
    return <GridItem key={index}>{grid.post_title}</GridItem>;
  };  
  
  render() {
    console.log(this.state);
    return (
      <Container>
        {this.props.layout.client_grid.map((grid, index) => this.renderGrid(grid, index))}
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
const ToutContainer = styled.div``;

// const
