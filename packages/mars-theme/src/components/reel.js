import React, { Component, useEffect, useCallback } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import FormHeader from "./FormHeader";
import AutoVideoPLayer from "./partials/autoPlayVideo";
class Reel extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    const data = this.props.state.source.get(this.props.state.router.link);
    const post = this.props.state.source[data.type][data.id];
    const Html2React = this.props.libraries.html2react.Component;
    const options = this.props.state.source.get("acf-options-page");
    return (
      <PageContainer onClick={this.removeModal}>
        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <HeadContainer>
          <FormHeader menuTheme="white" />
        </HeadContainer>
        <Content>
          <StyledVideoPlayer toggle={this.props.state} src={options.acf.video["url"]} />
        </Content>
      </PageContainer>
    );
  }
}

export default connect(Reel);

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
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
  z-index: 900;
  margin: auto;
  width: 100%;
`;
const StyledVideoPlayer = styled(AutoVideoPLayer)`
  /* z-index:100; */
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
    &.submit{
      width:fit-content;
      z-index:6;
      margin-left:-10px;
      @media (max-width: 768px) {
    margin-left:0;
    margin-top:48px;
  }
    }
  }
  a{
    width:fit-content;
    &:hover{
      color:#fff;
    }
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
    @media (max-width: 768px) {
      margin-top: 48px;
    }
    > p {
      position: relative;
       > label {
      font-size: 20px;
      font-weight: 300;
      line-height: 28px;
      position: absolute;
      top: 71%;
      color: #1d1d1d;
      transform: translateY(-50%);
      pointer-events: none;
      transition: top 0.2s;
      
      }
    }
      &.intro{
        width:25%;
        min-width:184px;
        margin-bottom:16px;
        line-height:24px;
      }
    }
    
    .form-container {
      display: flex;
      margin-bottom:60px;
      /* flex-wrap:wrap; */
      @media (max-width: 768px) {
        flex-wrap:wrap;
        margin-bottom:5px;
      }
      > span {
        margin-right: 14px;
        text-align: center;
        width:calc(100%/3);
        &:last-of-type{
          margin-right:0;
        }
        @media (max-width: 768px) {
          width:calc(100%);
          min-height:94px;
          margin-right:0;
          /* margin-bottom:14px; */
        }
        .wpcf7-acceptance {
          height: 100%;
          width:100%;
        }
        .wpcf7-list-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          width:100%;
          @media (max-width: 768px) {
         width:100%;
        }
          label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            width:100%;
            @media (max-width: 768px) {
         width:100%;
        }
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
    font-size: 12px;
    line-height: 16px;
    letter-spacing:.84px;
    font-weight:500;
    color: #1d1d1d;
    -webkit-appearance: none;
    padding: 0;
    text-transform: uppercase;
    background: transparent;
    border: none;
    margin-bottom: 0;
    width:130px;
    height:130px;
    border-radius:100%;
    outline:none;
    @media (max-width: 768px) {
      width:auto;
      height:auto;
      font-size: 12px;
      border-radius:0;
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
        opacity:0;

        /* For mobile, it's typically better to position checkbox on top of clickable
      area and turn opacity to 0 instead. */
      }
      span {
        border: 2px solid #1d1d1d;
        padding: 24px 15px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition:border 250ms ease-in-out;
        font-size:14px;
        font-weight:500;
        letter-spacing:.84px;
        line-height:14px;
        text-transform:uppercase;
        @media (max-width: 768px) {
          padding: 30px 0;
         transition:border 250ms ease-in-out, transform 250ms ease-in-out, background-color 250ms ease-in-out;
        }    
        &:hover{
          border: 2px solid #fff;
          
        }
      }
      input[type="checkbox"]:checked ~ span {
        border: 2px solid #fff;    
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
    &:focus{
        ~ label{
            top: 20px;
            font-size: 11px;
        }
    } 
    
  }
  .your-message{
      margin-bottom:45px;
      @media (max-width: 768px) {
      margin-bottom: 45px;
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
