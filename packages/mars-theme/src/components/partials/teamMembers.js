import React from "react";
import { connect, styled } from "frontity";

const TeamMembers = props => {
  //   console.log(props.layout.client_grid);
  return (
    <Container>
      {props.layout.team_members.map((teamMember, index) =>
        renderTeamMember(teamMember, index)
      )}
    </Container>
  );
};
var renderTeamMember = (teamMember, index) => {
  return <TeamMember key={index}>{teamMember.post_title}</TeamMember>;
};

export default connect(TeamMembers);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
`;

const TeamMember = styled.div``;
const ToutContainer = styled.div``;

// const
