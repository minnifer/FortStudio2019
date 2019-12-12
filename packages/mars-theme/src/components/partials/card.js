import React from 'react'
import { useSpring, animated } from 'react-spring'
import { connect, styled } from "frontity";
import Link from "./../link";
const Card = ({ linkURL, linkText, text }) => {
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
    const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
    const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
    const trans4 = (x, y) => `translate3d(${x / 1.5}px,${y / 1.5}px,0)`
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <Container>
            <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <div className="cardWrapper">
                <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                </div>                
                {/* <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} /> */}                
                <StyledLink link={linkURL}>
                    {linkText}
                </StyledLink>
                <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
            </div>
        </Container>
    );
};

export default connect(Card);
const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  z-index:2;
`;

const StyledText = styled.h5`
  z-index:2;
  position:absolute;
`;
const Container = styled.div`  
  margin: auto;
  box-sizing: border-box;  
  display: flex;
  flex-direction: column;
  max-width:none;
  .container {
  width: 100%;
  height: 100%;
  display: flex;
  max-width:none;
  position:relative
 
}

  .card1,
.card2,
.card3,
.card4 {
  position: absolute;
  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  will-change: transform;
}
.cardWrapper{
  transform:translateX(-25%) translateY(-25%);
  width: 200px;
  height: 200px; 
  position: absolute;
}
.card1 {
  width: 0;
  height: 0;
  background-color:#ffc400;
  border-radius: 50%;  
  z-index:0;
  transition:height 100ms ease-in-out, width 100ms ease-in-out;
}
&:hover{
    .card1{      
      width: 200px;
      height: 200px;      
    }
}

`;
// consts
