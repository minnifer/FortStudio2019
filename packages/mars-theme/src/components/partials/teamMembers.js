import React, { Component } from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import Link from "./../link";
import Card from "./card";
class TeamMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: true
    };
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
    var thisProxy = this;
    var hoverButtons = document.querySelectorAll(".teamLink");
    Array.prototype.forEach.call(hoverButtons, function(element, index) {
      element.addEventListener(
        "touchstart",
        ev => {
          if (thisProxy.state.hover) {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            thisProxy.setState({ hover: false });
            element.classList.add("hovering");
          } else {
            element.classList.remove("hovering");
          }
        },
        { passive: false }
      );
    });
  }
  render() {
    return (
      <Container>
        <Wrapper>
          {this.props.layout.team_members.map((teamMember, index) =>
            renderTeamMember(teamMember, index)
          )}
        </Wrapper>
      </Container>
    );
  }
}
const renderTeamMember = (teamMember, index) => {
  return (
    <TeamMember className="spy" key={index}>
      <ImageContainer className="teamLink" link={"mailto:" + teamMember.email}>
        <StyledImage alt={teamMember.image.alt} src={teamMember.image.url} />
        <span>Contact</span>
      </ImageContainer>
      <ContentContainer>
        <NameContainer>
          <Name>{teamMember.name}</Name>
          <Title>{teamMember.title}</Title>
        </NameContainer>
        <SocialContainer>
          {teamMember.linkedin ? (
            <Link
              target="_blank"
              className="menu-item linkedin"
              link={teamMember.linkedin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.379"
                height="13.754"
                viewBox="0 0 14.379 13.754"
              >
                <path
                  id="icons8-linkedin-2"
                  d="M7.126,16.754H4V7.376H7.126ZM5.564,6.126A1.563,1.563,0,1,1,7.126,4.562,1.563,1.563,0,0,1,5.564,6.126ZM18.379,16.754H15.374V12.19c0-1.088-.021-2.488-1.562-2.488-1.565,0-1.805,1.185-1.805,2.409v4.643H9V7.369h2.885V8.652h.041a3.178,3.178,0,0,1,2.845-1.515c3.045,0,3.607,1.944,3.607,4.471C18.379,11.607,18.379,16.754,18.379,16.754Z"
                  transform="translate(-4 -3)"
                  fill="#393939"
                />
              </svg>
            </Link>
          ) : null}
          {teamMember.instagram ? (
            <Link
              target="_blank"
              className="menu-item"
              link={teamMember.instagram}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.144"
                height="11.144"
                viewBox="0 0 11.144 11.144"
              >
                <path
                  id="icons8-instagram"
                  d="M6.1,3A3.1,3.1,0,0,0,3,6.1v4.953a3.1,3.1,0,0,0,3.1,3.1h4.953a3.1,3.1,0,0,0,3.1-3.1V6.1a3.1,3.1,0,0,0-3.1-3.1Zm6.191,1.238a.619.619,0,1,1-.619.619A.619.619,0,0,1,12.286,4.238ZM8.572,5.476a3.1,3.1,0,1,1-3.1,3.1A3.1,3.1,0,0,1,8.572,5.476Zm0,1.238a1.857,1.857,0,1,0,1.857,1.857A1.857,1.857,0,0,0,8.572,6.715Z"
                  transform="translate(-3 -3)"
                  fill="#393939"
                />
              </svg>
            </Link>
          ) : null}
          {teamMember.dribble ? (
            <Link
              target="_blank"
              className="menu-item dribble"
              link={teamMember.dribble}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.993"
                height="11.993"
                viewBox="0 0 11.993 11.993"
              >
                <path
                  id="dribbble-ball-mark"
                  d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM9.957,2.764a5.1,5.1,0,0,1,1.158,3.187,12.094,12.094,0,0,0-3.564-.163c-.039-.085-.072-.176-.111-.267-.1-.247-.221-.5-.338-.741A6.855,6.855,0,0,0,9.957,2.764ZM6,.885a5.11,5.11,0,0,1,3.4,1.288A5.805,5.805,0,0,1,6.706,4.019a27.652,27.652,0,0,0-1.912-3A5.209,5.209,0,0,1,6,.885Zm-2.179.481a32.321,32.321,0,0,1,1.9,2.959,19.209,19.209,0,0,1-4.735.624A5.146,5.146,0,0,1,3.818,1.366ZM.872,6V5.847a18.715,18.715,0,0,0,5.262-.728c.15.286.286.579.416.872l-.2.059A8.143,8.143,0,0,0,2.185,9.424,5.11,5.11,0,0,1,.872,6ZM6,11.122a5.086,5.086,0,0,1-3.141-1.08,7.032,7.032,0,0,1,4.019-3.2c.013-.006.02-.006.033-.013A21.173,21.173,0,0,1,8,10.712,5.038,5.038,0,0,1,6,11.122Zm2.855-.878a22.037,22.037,0,0,0-1-3.649,7.48,7.48,0,0,1,3.187.221A5.078,5.078,0,0,1,8.852,10.244Z"
                  fill="#393939"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
          ) : null}
        </SocialContainer>
      </ContentContainer>
    </TeamMember>
  );
};

export default connect(TeamMembers);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  margin: auto;
  max-width: 1440px;
  padding-bottom: 100px;
  @media (max-width: 1024px) {
    padding-bottom: 80px;
  }
  @media (max-width: 480px) {
    padding-bottom: 0px;
  }
`;
const StyledCard = styled(Card)`
  position: absolute;
`;
const Wrapper = styled.div`
  padding-left: 114px;
  padding-right: 114px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 60px;
    flex-direction: row;
  }
  @media (max-width: 480px) {
    padding: 0;
    flex-direction: column;
  }
`;

const TeamMember = styled.div`
  width: calc(95% / 3);
  margin-top: 140px;
  &:nth-of-type(2) {
    margin-top: 90px;
  }
  &:nth-of-type(3) {
    margin-top: 40px;
  }
  &:nth-of-type(4) {
    margin-top: 50px;
  }
  &:nth-of-type(5) {
    margin-top: 0px;
  }
  &:nth-of-type(6) {
    margin-top: -50px;
  }
  @media (max-width: 1024px) {
    width: calc(86% / 2);
    margin: auto;
    margin-bottom: 26px;
    &:nth-of-type(2) {
      margin-top: auto;
    }
    &:nth-of-type(3) {
      margin-top: auto;
    }
    &:nth-of-type(4) {
      margin-top: auto;
    }
    &:nth-of-type(5) {
      margin-top: auto;
    }
    &:nth-of-type(6) {
      margin-top: auto;
    }
  }
  @media (max-width: 480px) {
    width: 80%;
    margin: auto;
    margin-bottom: 26px;
    &:nth-of-type(2) {
      margin-top: auto;
    }
    &:nth-of-type(3) {
      margin-top: auto;
    }
    &:nth-of-type(4) {
      margin-top: auto;
    }
    &:nth-of-type(5) {
      margin-top: auto;
    }
    &:nth-of-type(6) {
      margin-top: auto;
    }
  }

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
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  @media (max-width: 1024px) {
    margin-left: 13px;
  }
`;
const Name = styled.div`
  font-size: 32px;
  line-height: 34px;
  margin-top: 16px;
  font-weight: 300;
  @media (max-width: 1024px) {
    margin-top: 26px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.84px;
  color: #c6c6c6;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;
const SocialContainer = styled.div`
  display: flex;
  margin-right: 16px;
  margin-top: 5px;
  .menu-item {
    margin-right: 12px;
    cursor: none;
    svg {
      width: 14px;
      height: 14px;
      path {
        transition: fill 250ms ease-in-out;
      }
    }
    &:hover,
    &:focus {
      svg {
        path {
          fill: #ffc40a;
        }
      }
    }
    &:last-of-type {
      margin-right: 0;
    }
    &.linkedin {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-left: 16px;
    margin-top: 16px;
  }
`;
const StyledImage = styled(Image)`
  display: block;
`;
const ImageContainer = styled(Link)`
  display: block;
  position: relative;
  cursor: none;
  &:before {
    content: "";
    opacity: 0;
    background-color: #ffc40a;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 250ms ease-in-out;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.84px;
    line-height: 51px;
    text-transform: uppercase;
    position: absolute;
    top: 37%;
    left: 50%;
    z-index: 900;
    transform: translate(-50%);
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 95px;
    background-color: #fff;
    border-radius: 50%;
    vertical-align: center;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
    &:before {
      content: "";
      background-color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top: -5%;
      width: 100%;
      height: 95px;
      border-radius: 50%;
      transition: transform 250ms ease-in-out;
      z-index: -1;
    }
    &:hover {
      &:before {
        transform: scale(1.2);
      }
    }
    @media (max-width: 1024px) {
      top: 35%;
    }
  }
  &:hover,
  &:focus,
  &:active,
  &.hovering {
    &:before {
      opacity: 0.9;
    }
    span {
      opacity: 1;
    }
  }
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
