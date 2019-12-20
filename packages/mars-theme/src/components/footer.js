import React, { Component } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Card from "./partials/card";
import CenteredCard from "./partials/centeredCard";
class Footer extends Component {
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
    const options = this.props.state.source.get("acf-options-page");
    return (
      <FooterContainer>
        <TopWrapper>
          <TopFooter>
            <Tout className="spy">
              <h4>{options.acf.footer_section.hire_headline}</h4>
              <p className="p1">{options.acf.footer_section.hire_body}</p>
              <Card
                linkURL="/contact"
                linkText={options.acf.footer_section.hire_cta_text}
              ></Card>
            </Tout>
            <Tout className="spy">
              <h4>{options.acf.footer_section.request_work_headline}</h4>
              <p className="p1">
                {options.acf.footer_section.request_work_body}
              </p>
              <Card
                linkURL="/contact"
                linkText={options.acf.footer_section.request_work_cta_text}
              ></Card>
            </Tout>
            <Tout className="spy">
              <h4>{options.acf.footer_section.careers_headline}</h4>
              <p className="p1">{options.acf.footer_section.careers_body}</p>
              <Card
                linkURL="/contact"
                linkText={options.acf.footer_section.careers_cta_text}
              ></Card>
            </Tout>
          </TopFooter>
        </TopWrapper>
        <BottomWrapper>
          <BottomFooter>
          <CenterContainer link="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.463"
                height="52.227"
                viewBox="0 0 24.463 52.227"
              >
                <path
                  id="logo-f_short"
                  d="M23.169,43.011H0v9.216H23.169Zm-12.8-33.8H24.463V0H0V33.8H10.369V23.812h12.8V14.593h-12.8Z"
                  fill="#1d1d1d"
                />
              </svg>
            </CenterContainer>
            <LeftContainer>
              <SocialContainer>
                <StyledSocialLink
                  target={options.acf.social_section.instagram.target}
                  link={options.acf.social_section.instagram.url}
                >
                  {options.acf.social_section.instagram.title}
                </StyledSocialLink>
                <StyledSocialLink
                  target={options.acf.social_section.dribble.target}
                  link={options.acf.social_section.dribble.url}
                >
                  {options.acf.social_section.dribble.title}
                </StyledSocialLink>
                <StyledSocialLink
                  target={options.acf.social_section.linkedin.target}
                  link={options.acf.social_section.linkedin.url}
                >
                  {options.acf.social_section.linkedin.title}
                </StyledSocialLink>
              </SocialContainer>
              <ContactContainer>
                <Address
                  href="https://www.google.com/maps/dir/39.9854812,-83.0039066/fort+agency/@39.9806004,-83.0072205,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88388ed7ebd473a7:0xf77541e546d4eb8c!2m2!1d-83.0026902!2d39.9761894"
                  target="_blank"
                  dangerouslySetInnerHTML={{
                    __html: options.acf.social_section.address
                  }}
                ></Address>
                <Phone
                  target="_blank"
                  link={"tel:" + options.acf.social_section.phone_number_field}
                >
                  {options.acf.social_section.phone_number_field}
                </Phone>
              </ContactContainer>
            </LeftContainer>
            
            <RightContainer className={this.props.activeTout}>
              <StyledCard
                linkURL="/contact"
                activeTout={this.props.activeTout}
                linkText={options.acf.footer_cta_text.reel_text}
              ></StyledCard>
              <StyledCard
                linkURL="/contact"
                activeTout={this.props.activeTout}
                linkText={options.acf.footer_cta_text.work_sample_form_text}
              ></StyledCard>
            </RightContainer>
          </BottomFooter>
        </BottomWrapper>
      </FooterContainer>
    );
  }
}

export default connect(Footer);

const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  justify-content: space-around;
  margin: auto;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;
const StyledCard = styled(CenteredCard)`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`;
const FooterContainer = styled.div``;
const TopFooter = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding-top: 125px;
  padding-bottom: 125px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
const Tout = styled.div`
  color: #ffffff;
  width: calc(70% / 3);
  position: relative;
  padding-left: 21px;

  position: relative;
  .link {
    z-index: 6;
    position: absolute;
    bottom: -110px;
    left: 0%;
    transform: translateX(-15%);
    border-radius: 50%;    
    @media (max-width: 768px) {
      a {
        height: auto;
        width: auto;
      }
      position: relative;
      transform: none;
      bottom: auto;
      height: 51px;
      width: auto;
    }
    &.first {
    }
  }
  p {
    color: #ffffff;
    margin-bottom: 15px;
    max-width: 95%;
  }
  h4 {
    text-transform: uppercase;
    line-height: 20px;
    margin-bottom: 12px;
  }
  a {
    letter-spacing: 0.84px;
  }
  &:before {
    width: 2px;
    content: "";
    height: 115%;
    left: 0;
    background: #ffc40a;
    position: absolute;
    @media (max-width: 768px) {
      height: 90%;
    }
  }
  &:first-of-type {
    margin-left: 114px;
    .link {
      /* transform: translateX(15%); */
    }
    @media (max-width: 768px) {
      .link {
        transform: none;
      }
    }
  }
  &:last-of-type {
    margin-right: 114px;
    .link{
      transform: translateX(-21%);
    }
  }
  /* &:hover {
    a {
      color: #1d1d1d;
    }
  } */
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 60px;
    margin-left: 36px;
    &:first-of-type {
      margin-left: 0;
      margin-left: 36px;
    }
    &:last-of-type {
      margin-right: 0;
      margin-bottom: 0;
      .link{
        transform:none;
      }
    }
  }
`;

const BottomFooter = styled.div`
  display: flex;
  padding-left: 114px;
  padding-right: 114px;
  justify-content: space-between;
  padding-top: 36px; 
  padding-bottom: 33px;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    padding:0;
    flex-direction:column;
  }
`;
const TopWrapper = styled.div`
  background: #1d1d1d;
`;
const BottomWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;
const LeftContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: space-around;
    width: 100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:40px;
    margin-bottom:40px;
  }
`;
const CenterContainer = styled(Link)`
  position: absolute;
  left: 50%;
  @media (max-width: 768px) {
    position:relative;
    background: #000;
    left:auto;
    width:100%;
    display:flex;
    justify-content:center;
    padding-top:40px;
    padding-bottom:40px;
    svg {
      path {
        fill: #fff;
      }
    }
  }
  svg {
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
`;
const RightContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items:center;
    
  }
`;
const Address = styled.a`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  cursor: none;
  transition: color 250ms ease-in-out;
  &:hover,
  &:focus {
    color: #ffc400;
  }
  @media (max-width: 768px) {
    margin-bottom:20px;
  }
`;
const Phone = styled(Link)`
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  font-size: 16px;
  transition: color 250ms ease-in-out;
  cursor: none;
  &:hover,
  &:focus {
    color: #ffc400;
  }
`;
const ReelLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.84px;
  margin: auto;
  text-transform: uppercase;
`;
const CircleWrapper = styled(Link)`
  position: relative;
  margin-right: 30px;
  background-color: #f8f8f8;
  border-radius: 100%;
  width: 130px;
  height: 130px;
  &:last-of-type {
    margin-right: 0;
  }
`;
const SampleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.84px;
  width: 70%;
  margin: auto;
  text-transform: uppercase;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 48px;
  @media (max-width: 768px) {
    align-items:center;
    margin-right:0;
    
  }
`;

const StyledSocialLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 20px;
  transition: color 250ms ease-in-out;
  &:hover,
  &:focus {
    color: #ffc400;
  }
  @media (max-width: 768px) {
    margin-bottom:20px;
  }
`;
