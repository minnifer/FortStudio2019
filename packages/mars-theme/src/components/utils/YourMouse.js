import React from "react";
import { useAnimationFrame } from "./useAnimationFrame";
import { connect, styled } from "frontity";

const math = {
  lerp: (a, b, n) => {
    return (1 - n) * a + n * b;
  }
};

const DEFAULT_EASE = .975;
const DIST = 100;
export default function YourMouse() {
  const [ease, setEase] = React.useState(DEFAULT_EASE);
  // These two are state since their changes need to rerender the div
  // because they affect its characteristics, which means React will ERASE them
  // from the DOM if we don't persist them
  const [transform, setTransform] = React.useState("");
  const [stuck, setStuck] = React.useState(false);
  const [swap, setSwap] = React.useState(false);
  // These are all just collections of data which don't necessary need a new
  // render from React (i.e. our little div) so we jsut keep them updated and
  // let the RAF callback use them as it will.
  // You could consolidate these into one REF that is your previous `this.data` basically too.
  const cursorRef = React.useRef();
  const targets = React.useRef([]);
  const mouseHitPos = React.useRef([-100, -100]);
  const lastPos = React.useRef([0, 0]);

  // memoized, never changes
  const mousePos = React.useCallback(ev => {
    mouseHitPos.current = [ev.pageX, ev.pageY];
  }, []);

  // runs once on mount
  React.useEffect(() => {
    // setup targets once
    const stickies = [...document.querySelectorAll("[data-stick-cursor]")];
    const swaps = [...document.querySelectorAll("[data-white-cursor]")];
    targets.current =
      // mouse follower and cleanup
      window.addEventListener("mousemove", mousePos, { passive: true });
    return () =>
      window.removeEventListener("mousemove", mousePos, { passive: true });
  }, []);

  useAnimationFrame(deltaTime => {
    // check collisions
    let isNearOne = false;
    const stickies = [...document.querySelectorAll("[data-stick-cursor]")];
    stickies
      .map(ele => {
        const bounds = ele.getBoundingClientRect();
        const objectWidth = ele.offsetWidth;
        const height = ele.offsetHeight;
        return {
          el: ele,
          x: window.scrollX + bounds.left + bounds.width / 2,
          y: window.scrollY + bounds.top + bounds.height / 2
        };
      })
      .forEach(target => {
        const d = {
          x: target.x - mouseHitPos.current[0],
          y: target.y - mouseHitPos.current[1]
        };

        const a = Math.atan2(d.x, d.y);
        const h = Math.sqrt(d.x * d.x + d.y * d.y);

        if (h < DIST && !stuck) {
          isNearOne = true;
          // pull towards this target
          mouseHitPos.current[0] = target.x - (Math.sin(a) * h) / 50;
          mouseHitPos.current[1] = target.y - (Math.cos(a) * h) / 50;
        }
      });

    if (isNearOne) {
      setStuck(true); // enlarge
      setEase(0.00125); // slow a bit
    } else {
      setStuck(false); // shrink
      setEase(DEFAULT_EASE); // back to OG speed
    }

    // Do the maths
    const [currentX, currentY] = mouseHitPos.current;
    const [lastPosX, lastPosY] = lastPos.current;
    const lastX = math.lerp(lastPosX, currentX, ease);
    const lastY = math.lerp(lastPosY, currentY, ease);

    const fxDiff = currentX - lastX;
    const fxAcc = fxDiff / window.innerWidth;
    const fxVelo = +fxAcc;
    const fxScale = 1 - Math.abs(fxVelo * 5);

    const transform = `translate3d(${lastX - window.scrollX}px, ${lastY -
      window.scrollY}px, 0) scale(${fxScale})`;

    // update lastpos without rerendering
    lastPos.current = [lastX, lastY];
    // force rerender to update transform CSS
    setTransform(transform);
  });
  return (
    <Cursor
      id="cursor"
      ref={cursorRef}
      className={`cursor ${stuck ? "is-active" : ""} ${
        swap ? "is-swapped" : ""
      }`}
      data-cursor
      style={{ transform }}
    >
      <div />
    </Cursor>
  );
}

const Cursor = styled.div`
  position: fixed;
  top: -0.5rem;
  left: -0.5rem;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  @media (max-width: 768px) {
    opacity: 0;
  }
  div {
    z-index: 2;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 1px solid #ffc400;
    background-color: rgba(255, 196, 0, 100);
    opacity: 1;
    cursor: none;
    transform: translate(-45%, -45%);
    -webkit-transition: height 0.25s ease-in-out, width 0.25s ease-in-out,
      transform 0.25s ease-in-out, opacity 0.35s ease;
    transition: height 0.25s ease-in-out, width 0.25s ease-in-out,
      transform 0.25s ease-in-out, opacity 0.35s ease;
  }

  &.is-active {
    z-index: 2;
    div {
      background-color: #ffc400;
      width: 10rem;
      height: 10rem;
      opacity: 1;
      cursor: none;
    }
  }
  &.is-swapped {
    div {
      border: 1px solid #fff;
      background-color: #fff;
    }
  }
  &.is-menu {
    
    div {
      
    }
  }
`;
