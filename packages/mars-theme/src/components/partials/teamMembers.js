import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import Link from "./../link";
const TeamMembers = props => {
  return (
    <Container>
      {props.layout.team_members.map((teamMember, index) =>
        renderTeamMember(teamMember, index)
      )}
    </Container>
  );
};
const renderTeamMember = (teamMember, index) => {  
  return (
    <TeamMember key={index}>
      <StyledImage alt={teamMember.image.alt} src={teamMember.image.url} />
      <NameContainer>
        {teamMember.name}
        {teamMember.title}
      </NameContainer>
      <SocialContainer>
          <Link className="menu-item" link={teamMember.dribble}>{teamMember.dribble}</Link>
          <Link className="menu-item" link={teamMember.instagram}>{teamMember.instagram}</Link>
          <Link className="menu-item" link={teamMember.linkedin}>{teamMember.linkedin}</Link>
      </SocialContainer>
    </TeamMember>
  );
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
const NameContainer = styled.div``;
const SocialContainer = styled.div``;
const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

// const
