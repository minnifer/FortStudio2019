import React from "react";
import { connect, styled } from "frontity";

const ClientGrid = props => {
//   console.log(props.layout.client_grid);
  return (
    <Container>  
    {props.layout.client_grid.map((grid, index) => (
          renderGrid(grid, index)
      ))}
    </Container>
  );
};
var renderGrid = (grid, index) => {
  return(
      <GridItem key={index}>
      {grid.post_title}
      </GridItem>
  )
}

export default connect(ClientGrid);

const Container = styled.div`  
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
`;

const GridItem = styled.div`  
`;
const ToutContainer = styled.div``;

// const
