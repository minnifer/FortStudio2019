import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import Header from "./header";
import FeaturedMedia from "./featured-media";
import striptags from "striptags";
import Card from "./partials/card";
import VideoPlayer from "./partials/VideoPlayer";
import LottieControl from "./partials/LottieControl";
import YourMouse from "./utils/YourMouse";
import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";
import * as animationData from "./data.json";
// import './utils/your-mouse.scss'
const Home = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const { isFirstVisit } = state.theme;
  let lottie = <LottieControl />;
  useEffect(() => {
    actions.source.fetch("/");
  }, []);
  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("firstVisit")) {
      lottie = <div />;
      if (document.querySelector("#animation")) {
        document.querySelector("#animation").style.display = "none";
      }
    } else {
      sessionStorage.setItem("firstVisit", "true");
      lottie = <LottieControl />;
    }
  }
  // console.log(isFirstVisit);
  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      {/* Add the header of the site. */}
      <YourMouse />
      <HeadContainer>
        <Header menuTheme="white" />
      </HeadContainer>
      <Content>
        {lottie}
        <VideoContainer id="checkIfOpen">
          <StyledVideoContainer>
            {isDesktopOrLaptop && (
              <>
                <Video
                  autoPlay
                  muted
                  loop
                  playsInline
                  allowsInlineMediaPlayback={true}
                  src={post.acf.background_video["url"]}
                  className="desktop"
                />
              </>
            )}
            {isTabletOrMobile && (
              <Video
                src={post.acf.mobile_background_video_mp4["url"]}
                autoPlay
                muted
                loop
                playsInline
                allowsInlineMediaPlayback={true}
                className="mobile"
              ></Video>
            )}
          </StyledVideoContainer>
          <StyledVideoPlayer toggle={state} src={post.acf.video["url"]} />
          <TextContainer>
            <Wrapper>
              <BodyContainer
                dangerouslySetInnerHTML={{ __html: post.acf.body }}
              ></BodyContainer>
              <StyledCard
                linkURL="/what-we-do"
                linkText="Learn More"
              ></StyledCard>
            </Wrapper>
          </TextContainer>
        </VideoContainer>
      </Content>
    </Container>
  ) : null;
};

export default connect(Home);

const Container = styled.div`
  margin: 0;
  width: 100%;
  overflow: hidden;
`;
const Wrapper = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 114px;
  @media (max-width: 768px) {
    max-width: none;
    padding-left: 0;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    .link {
      transform: translateY(-50%);
      width: 100px;
      height: auto;
      a {
        position: relative;
        width: auto;
        height: auto;
      }
    }
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  /* z-index: 4; */
  margin: auto;
  width: 100%;
`;
const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.is-open {
    z-index: 900;
  }
  @media (max-width: 768px) {
    height: 100%;
    position: fixed;
    /* z-index: 5; */
  }
`;
const StyledVideoPlayer = styled(VideoPlayer)`
  /* z-index:100; */
`;
const TextContainer = styled.div`
  position:relative;  
  z-index:3;
  max-width:1440px;
  margin:auto;
  width:100%;
  padding-top:185px;
  @media (max-width: 768px) {
    padding-top:0;    
  }
  }
`;

const BodyContainer = styled.h1`
  color: #fff;
  /* width: 28%; */
  /* margin-bottom:45px; */
  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    width: 100%;
    margin: auto;
    margin-bottom: 26px;
  }
`;

const StyledCard = styled(Card)`
  z-index: 10;
`;

const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.5;
  &.desktop {
    display: none;
  }
  @media (min-width: 768px) {
    &.desktop {
      display: block;
    }
    &.mobile {
      display: none;
    }
  }
`;
const StyledVideoContainer = styled.div`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121212;
`;

// This component is the parent of the `content.rendered` HTML. We can use nested
// selectors to style that HTML.
const Content = styled.div`
  word-break: break-word;

  * {
    max-width: 100%;
  }

  .p {
    /* line-height: 1.6em; */
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0;
    line-height: 28px;
    color: #1d1d1d;
  }
  p {
    margin: 0;
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
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
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
