import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Logo = ({ state, actions, menuTheme }) => {
  const { isMobileMenuOpen } = state.theme;
  return(
 <>
    <Container>
      <StyledLink link="/">
        {isMobileMenuOpen ? (
          <>
            <StyledSVG
              width="104.482"
              height="40.693"
              viewBox="0 0 104.482 40.693"
              menuTheme="white"
            >
              <defs>
                <clipPath id="clip-path">
                  <path
                    id="Path_707"
                    data-name="Path 707"
                    d="M0-37H104.482V3.693H0Z"
                    transform="translate(0 37)"
                    fill="#fff"
                    clipRule="evenodd"
                  />
                </clipPath>
                <clipPath id="clip-path-2">
                  <path
                    id="Path_706"
                    data-name="Path 706"
                    d="M-85,773.654H1498.726V-71H-85Z"
                    transform="translate(85 71)"
                    fill="#fff"
                  />
                </clipPath>
                <clipPath id="clip-path-3">
                  <rect
                    id="Rectangle_196"
                    data-name="Rectangle 196"
                    width="105"
                    height="41"
                    transform="translate(0 -0.036)"
                    fill="#fff"
                  />
                </clipPath>
                <clipPath id="clip-path-4">
                  <path
                    id="Path_705"
                    data-name="Path 705"
                    d="M104.482-29.333V-36.41H81.617v7.077h7.467v18.872h7.931V-29.333ZM77.416-10.461l-5.222-9.08a8.994,8.994,0,0,0,4.635-7.875,8.977,8.977,0,0,0-8.959-8.994H54.944v25.95h7.931v-7.667h2.2l4.409,7.667ZM69.338-27.269a2.649,2.649,0,0,1-2.644,2.654H62.876v-5.308h3.819a2.649,2.649,0,0,1,2.644,2.654ZM49.959-23.435A13.538,13.538,0,0,0,36.447-37,13.538,13.538,0,0,0,22.935-23.435,13.538,13.538,0,0,0,36.447-9.871,13.538,13.538,0,0,0,49.959-23.435Zm-7.637,0a5.886,5.886,0,0,1-5.875,5.9,5.886,5.886,0,0,1-5.875-5.9,5.886,5.886,0,0,1,5.875-5.9,5.886,5.886,0,0,1,5.875,5.9Zm-34.391-5.9h10.78V-36.41H0v25.949H7.931v-7.667h9.793v-7.077H7.931ZM0,3.693H103.5V-3.384H0Z"
                    transform="translate(0 37)"
                    fill="#fff"
                    clipRule="evenodd"
                  />
                </clipPath>
                <clipPath id="clip-path-5">
                  <path
                    id="Path_704"
                    data-name="Path 704"
                    d="M0,3.693H104.482V-37H0Z"
                    transform="translate(0 37)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_154"
                data-name="Group 154"
                clipPath="url(#clip-path)"
              >
                <g
                  id="Group_153"
                  data-name="Group 153"
                  transform="translate(-93.484 -37.394)"
                  clipPath="url(#clip-path-2)"
                >
                  <g
                    id="Group_152"
                    data-name="Group 152"
                    transform="translate(93.484 37.314)"
                    clipPath="url(#clip-path-3)"
                  >
                    <g
                      id="Group_151"
                      data-name="Group 151"
                      transform="translate(0 0.079)"
                      clipPath="url(#clip-path-4)"
                    >
                      <g
                        id="Group_150"
                        data-name="Group 150"
                        clipPath="url(#clip-path-5)"
                      >
                        <path
                          id="Path_703"
                          data-name="Path 703"
                          d="M-5,9.691H110.48V-42H-5Z"
                          transform="translate(-0.499 36.501)"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </StyledSVG>
          </>
        ) : (
          <StyledSVG
            width="104.482"
            height="40.693"
            viewBox="0 0 104.482 40.693"
            menuTheme={menuTheme}
          >
            <defs>
              <clipPath id="clip-path">
                <path
                  id="Path_707"
                  data-name="Path 707"
                  d="M0-37H104.482V3.693H0Z"
                  transform="translate(0 37)"
                  fill="#fff"
                  clipRule="evenodd"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  id="Path_706"
                  data-name="Path 706"
                  d="M-85,773.654H1498.726V-71H-85Z"
                  transform="translate(85 71)"
                  fill="#fff"
                />
              </clipPath>
              <clipPath id="clip-path-3">
                <rect
                  id="Rectangle_196"
                  data-name="Rectangle 196"
                  width="105"
                  height="41"
                  transform="translate(0 -0.036)"
                  fill="#fff"
                />
              </clipPath>
              <clipPath id="clip-path-4">
                <path
                  id="Path_705"
                  data-name="Path 705"
                  d="M104.482-29.333V-36.41H81.617v7.077h7.467v18.872h7.931V-29.333ZM77.416-10.461l-5.222-9.08a8.994,8.994,0,0,0,4.635-7.875,8.977,8.977,0,0,0-8.959-8.994H54.944v25.95h7.931v-7.667h2.2l4.409,7.667ZM69.338-27.269a2.649,2.649,0,0,1-2.644,2.654H62.876v-5.308h3.819a2.649,2.649,0,0,1,2.644,2.654ZM49.959-23.435A13.538,13.538,0,0,0,36.447-37,13.538,13.538,0,0,0,22.935-23.435,13.538,13.538,0,0,0,36.447-9.871,13.538,13.538,0,0,0,49.959-23.435Zm-7.637,0a5.886,5.886,0,0,1-5.875,5.9,5.886,5.886,0,0,1-5.875-5.9,5.886,5.886,0,0,1,5.875-5.9,5.886,5.886,0,0,1,5.875,5.9Zm-34.391-5.9h10.78V-36.41H0v25.949H7.931v-7.667h9.793v-7.077H7.931ZM0,3.693H103.5V-3.384H0Z"
                  transform="translate(0 37)"
                  fill="#fff"
                  clipRule="evenodd"
                />
              </clipPath>
              <clipPath id="clip-path-5">
                <path
                  id="Path_704"
                  data-name="Path 704"
                  d="M0,3.693H104.482V-37H0Z"
                  transform="translate(0 37)"
                  fill="#fff"
                />
              </clipPath>
            </defs>
            <g id="Group_154" data-name="Group 154" clipPath="url(#clip-path)">
              <g
                id="Group_153"
                data-name="Group 153"
                transform="translate(-93.484 -37.394)"
                clipPath="url(#clip-path-2)"
              >
                <g
                  id="Group_152"
                  data-name="Group 152"
                  transform="translate(93.484 37.314)"
                  clipPath="url(#clip-path-3)"
                >
                  <g
                    id="Group_151"
                    data-name="Group 151"
                    transform="translate(0 0.079)"
                    clipPath="url(#clip-path-4)"
                  >
                    <g
                      id="Group_150"
                      data-name="Group 150"
                      clipPath="url(#clip-path-5)"
                    >
                      <path
                        id="Path_703"
                        data-name="Path 703"
                        d="M-5,9.691H110.48V-42H-5Z"
                        transform="translate(-0.499 36.501)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </StyledSVG>
        )}
      </StyledLink>
    </Container>
  </>
  );
 
};

export default connect(Logo);

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 0;
  padding-top:114px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 119px;
  padding-right: 0;
  width:fit-content;
  @media (max-width: 768px) {
    padding:0;
    padding-left:36px;
  }
`;

const StyledSVG = styled.svg`
  g,
  path {
    fill: ${props => props.menuTheme};
  }
`;
