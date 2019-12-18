import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import FormHeader from "./FormHeader";
import $ from "jquery";
import { findDOMNode } from "react-dom";

const Form = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const options = state.source.get("acf-options-page");
  // Once the post has loaded in the DOM, prefetch both the
  // home posts and the list component so if the user visits
  // the home page, everything is ready and it loads instantly.
  useEffect(() => {
    actions.source.fetch("/");
    $(".wpcf7-form input")
      .focus(function() {
        $(this)
          .parent()
          .siblings("label")
          .addClass("has-value");
      })
      // blur input fields on unfocus + if has no value
      .blur(function() {
        var text_val = $(this).val();
        if (text_val === "") {
          $(this)
            .parent()
            .siblings("label")
            .removeClass("has-value");
        }
      });
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <PageContainer>
      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <HeadContainer>
        <FormHeader menuTheme="black" />
      </HeadContainer>
      <Content>
        <LeftContainer>
          <Headline
            dangerouslySetInnerHTML={{
              __html: options.acf.contact_headline
            }}
          ></Headline>
          <SocialContainer>
            <span>Find Us</span>
            <Address
              dangerouslySetInnerHTML={{
                __html: options.acf.social_section.address
              }}
            ></Address>
          </SocialContainer>
          <SocialContainer>
            <span>Call Us</span>
            <Phone
              target="_blank"
              link={"tel:" + options.acf.social_section.phone_number_field}
            >
              {options.acf.social_section.phone_number_field}
            </Phone>
          </SocialContainer>
        </LeftContainer>
        <RightContainer>
          <Html2React html={post.content.rendered} />
        </RightContainer>
      </Content>
    </PageContainer>
  ) : null;
};

export default connect(Form);

const PageContainer = styled.div`
  background: #ffc40a;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E %3Ccircle id='Cursor' cx='6' cy='6' r='6' fill='%231D1D1D' opacity='0.9'/%3E %3C/svg%3E "),
    pointer;
`;
const RightContainer = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Headline = styled.h2`
  margin-bottom: 36px;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  span {
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.84px;
    line-height: 16px;
    margin-bottom: 14px;
  }
`;
const Address = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
`;
const Phone = styled(Link)`
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0;
  font-size: 16px;
  transition: color 250ms ease-in-out;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ffc400;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-top: 240px;
  width: 35%;
  margin-left: 131px;
  top: 10%;
  padding-bottom: 177px;
  height: fit-content;
  @media (max-width: 768px) {
    position: relative;
    margin-top: 161px;
    top: auto;
    padding-bottom: 0;
    width: 100%;
    margin-left: 0;
  }
`;
const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const BodyContainer = styled.div`
  margin-top: 15px;
  z-index: 99;
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  /* z-index: 1; */
  margin: auto;
  width: 100%;
`;

// This component is the parent of the `content.rendered` HTML. We can use nested
// selectors to style that HTML.
const Content = styled.div`
  word-break: break-word;
  max-width: 1440px;
  margin: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 119px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 36px;
  }
  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    color: #1d1d1d;
    box-shadow: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    outline: none;
    position: relative;
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0;
  }
  
  form {
    margin-top: 235px;
    > p {
      position: relative;
       > label {
      font-size: 20px;
      font-weight: 300;
      line-height: 28px;
      position: absolute;
      top: 62%;
      color: #1d1d1d;
      transform: translateY(-50%);
      pointer-events: none;
      transition: top 0.2s;
    }
      &.intro{
        width:25%;
        min-width:184px;
        margin-bottom:16px;
        line-height:24px;
      }
    }
    @media (max-width: 768px) {
      margin-top: 68px;
    }
    .form-container {
      display: flex;
      margin-bottom:60px;
      /* flex-wrap:wrap; */
      @media (max-width: 768px) {
    flex-wrap:wrap;
    margin-bottom:40px;
  }
      > span {
        margin-right: 14px;
        text-align: center;
        @media (max-width: 768px) {
          width:calc(90%/2);
          min-height:94px;
          margin-bottom:14px;
        }
        .wpcf7-acceptance {
          height: 100%;
        }
        .wpcf7-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }
        }
      }
    }
  }
  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    letter-spacing:.84px;
    font-weight:500;
    color: #1d1d1d;
    -webkit-appearance: none;
    padding: 0;
    text-transform: uppercase;
    background: transparent;
    border: none;
    margin-bottom: 85px;
    @media (max-width: 768px) {
      margin-bottom: 85px;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  
    > label {
      font-size: 20px;
      font-weight: 300;
      line-height: 28px;
      position: absolute;
      top: 62%;
      color: #1d1d1d;
      transform: translateY(-50%);
      pointer-events: none;
      transition: top 0.2s;
    }
    label.has-value {
      top: 20px;
      font-size: 11px;
    }
  }
  .wpcf7-acceptance {
    display: flex;
    flex-wrap: wrap;
    .wpcf7-list-item {
      /* width: 50%; */
      input[type="checkbox"] {
        position: absolute;
        top: -9999px;
        left: -9999px;
        /* For mobile, it's typically better to position checkbox on top of clickable
      area and turn opacity to 0 instead. */
      }
      span {
        border: 4px solid #1d1d1d;
        padding: 24px 15px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition:border 250ms ease-in-out;
        font-size:12px;
        font-weight:500;
        letter-spacing:.84px;
        line-height:14px;
        text-transform:uppercase;
        @media (max-width: 768px) {
         transition:border 250ms ease-in-out, transform 250ms ease-in-out, background-color 250ms ease-in-out;
        }    
        &:hover{
          border: 4px solid #fff;
          
        }
      }
      input[type="checkbox"]:checked ~ span {
        border: 4px solid #fff;    
        background-color:#fff;
        @media (max-width: 768px) {
          transform:scale(1);
          transform-origin: top left;
        }    
      }
    }
  }

  .wpcf7-list-item {
    label {
      position: relative;
      top: auto;
      transform: none;
    }
  }
  .your-name,  
  .text-218,
  .your-message {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    @media (max-width: 768px) {
      margin-bottom: 45px;
    }

    &:after {
      /* border-bottom:1px solid #1D1D1D; */
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #1d1d1d;
    }
    
    }
    .your-email{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
    @media (max-width: 768px) {
      margin-bottom: 45px;
    }

    &:after {
      /* border-bottom:1px solid #1D1D1D; */
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #1d1d1d;
    }
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;