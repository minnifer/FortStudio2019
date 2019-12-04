import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Footer = ({ state }) => {
  const options = state.source.get("acf-options-page");  
  return (
    <FooterContainer>
      <TopWrapper>
        <TopFooter>
          <Card>
            <h4>{options.acf.footer_section.hire_headline}</h4>
            <p className="p1">{options.acf.footer_section.hire_body}</p>
            <Link link="/what-we-do">
              {options.acf.footer_section.hire_cta_text}
            </Link>
          </Card>
          <Card>
            <h4>{options.acf.footer_section.request_work_headline}</h4>
            <p className="p1">{options.acf.footer_section.request_work_body}</p>
            <Link link="/what-we-do">
              {options.acf.footer_section.request_work_cta_text}
            </Link>
          </Card>
          <Card>
            <h4>{options.acf.footer_section.careers_headline}</h4>
            <p className="p1">{options.acf.footer_section.careers_body}</p>
            <Link link="/what-we-do">
              {options.acf.footer_section.careers_cta_text}
            </Link>
          </Card>
        </TopFooter>
      </TopWrapper>
      <BottomWrapper>
        <BottomFooter>
          <LeftContainer>
            <SocialContainer>
              <Link target={options.acf.social_section.instagram.target} link={options.acf.social_section.instagram.url}>{options.acf.social_section.instagram.title}</Link>
              <Link target={options.acf.social_section.dribble.target} link={options.acf.social_section.dribble.url}>{options.acf.social_section.dribble.title}</Link>
              <Link target={options.acf.social_section.linkedin.target} link={options.acf.social_section.linkedin.url}>{options.acf.social_section.linkedin.title}</Link>
            </SocialContainer>
            <ContactContainer>
              <Address dangerouslySetInnerHTML={{ __html: options.acf.social_section.address }}>
              </Address>              
              <Phone>{options.acf.social_section.phone_number}</Phone>
            </ContactContainer>
          </LeftContainer>
          <RightContainer>
            <ReelLink>{options.acf.footer_cta_text.reel_text}</ReelLink>
            <SampleLink>{options.acf.footer_cta_text.work_sample_form_text}</SampleLink>
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
`;
const FooterContainer = styled.div``;
const TopFooter = styled.div``;
const Card = styled.div``;
const BottomFooter = styled.div``;
const TopWrapper = styled.div``;
const BottomWrapper = styled.div``;
const LeftContainer = styled.div``;
const RightContainer = styled.div``;
const ContactContainer = styled.div``;
const Address = styled.div``;
const Phone = styled.div``;
const ReelLink = styled.div``;
const SampleLink = styled.div``;
const SocialContainer = styled.div``;