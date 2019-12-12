import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Card from "./partials/card";
const Footer = ({ state }) => {
  const options = state.source.get("acf-options-page");
  return (
    <FooterContainer>
      <TopWrapper>
        <TopFooter>
          <Tout>
            <h4>{options.acf.footer_section.hire_headline}</h4>
            <p className="p1">{options.acf.footer_section.hire_body}</p>
            <Card linkURL="/what-we-do" linkText={options.acf.footer_section.hire_cta_text}></Card>
          </Tout>
          <Tout>
            <h4>{options.acf.footer_section.request_work_headline}</h4>
            <p className="p1">{options.acf.footer_section.request_work_body}</p>
            <Card linkURL="/what-we-do" linkText={options.acf.footer_section.request_work_cta_text}></Card>
          </Tout>
          <Tout>
            <h4>{options.acf.footer_section.careers_headline}</h4>
            <p className="p1">{options.acf.footer_section.careers_body}</p>
            <Card linkURL="/what-we-do" linkText={options.acf.footer_section.careers_cta_text}></Card>
          </Tout>
        </TopFooter>
      </TopWrapper>
      <BottomWrapper>
        <BottomFooter>
          <LeftContainer>
            <SocialContainer>
              <Link
                target={options.acf.social_section.instagram.target}
                link={options.acf.social_section.instagram.url}
              >
                {options.acf.social_section.instagram.title}
              </Link>
              <Link
                target={options.acf.social_section.dribble.target}
                link={options.acf.social_section.dribble.url}
              >
                {options.acf.social_section.dribble.title}
              </Link>
              <Link
                target={options.acf.social_section.linkedin.target}
                link={options.acf.social_section.linkedin.url}
              >
                {options.acf.social_section.linkedin.title}
              </Link>
            </SocialContainer>
            <ContactContainer>
              <Address
                dangerouslySetInnerHTML={{
                  __html: options.acf.social_section.address
                }}
              ></Address>
              <Phone
                target="_blank"
                link={"tel:" + options.acf.social_section.phone_number_field}
              >{options.acf.social_section.phone_number_field}</Phone>
            </ContactContainer>
          </LeftContainer>
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
          <RightContainer>
            <CircleWrapper>
              <ReelLink>{options.acf.footer_cta_text.reel_text}</ReelLink>
            </CircleWrapper>
            <CircleWrapper>
              <SampleLink>
                {options.acf.footer_cta_text.work_sample_form_text}
              </SampleLink>
            </CircleWrapper>
          </RightContainer>
        </BottomFooter>
      </BottomWrapper>
    </FooterContainer>
  );
};

export default connect(Footer);

const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
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
  padding-top: 120px;
  padding-bottom: 120px;
  justify-content: space-between;
`;
const Tout = styled.div`
  color: #ffffff;
  width: calc(70% / 3);
  position: relative;
  padding-left: 21px;
  p {
    color: #ffffff;
    margin-bottom: 27px;
  }
  h4 {
    text-transform: uppercase;
    line-height: 20px;
    margin-bottom: 22px;
  }
  &:before {
    width: 2px;
    content: "";
    height: 100%;
    left: 0;
    background: #ffc40a;
    position: absolute;
  }
  &:first-of-type {
    margin-left: 114px;
  }
  &:last-of-type {
    margin-right: 114px;
  }
  &:hover{
    a{
      color:#1D1D1D;
    }
    
  
}
  &:nth-of-type(1){
    .cardWrapper{
      transform:translateX(0%) translateY(-50%);
    }
  }
  &:nth-of-type(2){
    .cardWrapper{
      transform:translateX(-25%) translateY(-50%);
    }
  }
  &:nth-of-type(3){
    .cardWrapper{
      transform:translateX(-42.5%) translateY(-50%);
    }
  }
`;


const BottomFooter = styled.div`
  display: flex;
  padding-left: 114px;
  padding-right: 114px;
  justify-content: space-between;
  padding-top: 33px;
  padding-bottom: 33px;
  align-items: center;
  position:relative;
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
`;
const CenterContainer = styled(Link)`
position:absolute;
left:50%;
svg{
  path{
    transition: fill 250ms ease-in-out;
  }
}
&:hover, &:focus{
  svg{
    path{
      fill: #FFC40A;
    }
  }
}
`;
const RightContainer = styled.div`
  display: flex;
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Address = styled.div``;
const Phone = styled(Link)`
font-weight:500;`;
const ReelLink = styled.div`
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
  text-align:center;
  font-size:14px;
  font-weight:500;
  line-height:16px;
 
  margin:auto;
  text-transform:uppercase;
`;
const CircleWrapper = styled.div`
  position: relative;    
  margin-right: 30px;
  background-color: #f8f8f8;
  border-radius: 100%;
   width:130px;
    height:130px;
  &:last-of-type{
    margin-right:0;
  }
`;
const SampleLink = styled.div`
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
  text-align:center;
  font-size:14px;
  font-weight:500;
  line-height:16px;
  width:70%;
  margin:auto;
  text-transform:uppercase;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 48px;
`;
