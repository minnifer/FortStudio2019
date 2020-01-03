import React from "react";
import { useAnimationFrame } from "./useAnimationFrame";
import { connect, styled } from "frontity";

const math = {
  lerp: (a, b, n) => {
    return (1 - n) * a + n * b;
  }
};

const DEFAULT_EASE = 1;
const DIST = 100;
export default function YourMouse() {
  const [ease, setEase] = React.useState(DEFAULT_EASE);
  // These two are state since their changes need to rerender the div
  // because they affect its characteristics, which means React will ERASE them
  // from the DOM if we don't persist them
  const [transform, setTransform] = React.useState("");
  const [stuck, setStuck] = React.useState(false);
  const [largeStuck, setLargeStuck] = React.useState(false);
  const [smallStuck, setSmallStuck] = React.useState(false);
  const [grow, setGrow] = React.useState(false);
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
    const largeStickies = [...document.querySelectorAll("[data-large-cursor]")];
    const smallStickies = [...document.querySelectorAll("[data-small-cursor]")];
    const growStickies = [...document.querySelectorAll("[data-grow-cursor]")];
    targets.current =
      // mouse follower and cleanup
      window.addEventListener("mousemove", mousePos, { passive: true });
    return () =>
      window.removeEventListener("mousemove", mousePos, { passive: true });
  }, []);

  useAnimationFrame(deltaTime => {
    // check collisions
    let isNearOne = false;
    let isNearLargeOne = false;
    let isNearSmallOne = false;
    let isNearGrowOne = false;
    const stickies = [...document.querySelectorAll("[data-stick-cursor]")];
    const largeStickies = [...document.querySelectorAll("[data-large-cursor]")];
    const smallStickies = [...document.querySelectorAll("[data-small-cursor]")];
    const growStickies = [...document.querySelectorAll("[data-grow-cursor]")];
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
          mouseHitPos.current[0] = target.x - (Math.sin(a) * h) / 10;
          mouseHitPos.current[1] = target.y - (Math.cos(a) * h) / 10;
        }
      });
    largeStickies
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

        if (h < DIST && !largeStuck) {
          isNearLargeOne = true;
          // pull towards this target
          mouseHitPos.current[0] = target.x - (Math.sin(a) * h) / 10;
          mouseHitPos.current[1] = target.y - (Math.cos(a) * h) / 10;
        }
      });
    smallStickies
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

        if (h < DIST && !smallStuck) {
          isNearSmallOne = true;
          // pull towards this target
          mouseHitPos.current[0] = target.x - (Math.sin(a) * h) / 10;
          mouseHitPos.current[1] = target.y - (Math.cos(a) * h) / 10;
        }
      });
    growStickies
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

        if (h < DIST && !grow) {
          isNearGrowOne = true;
          // pull towards this target
          mouseHitPos.current[0] = target.x - (Math.sin(a) * h) / 10;
          mouseHitPos.current[1] = target.y - (Math.cos(a) * h) / 10;
        }
      });
    if (isNearOne) {
      setStuck(true); // enlarge
      setEase(0.0); // slow a bit
    } else {
      setStuck(false); // shrink
      setEase(DEFAULT_EASE); // back to OG speed
    }
    if (isNearLargeOne) {
      setLargeStuck(true); // enlarge
      setEase(0.0); // slow a bit
    } else {
      setLargeStuck(false); // shrink
      setEase(DEFAULT_EASE); // back to OG speed
    }
    if (isNearSmallOne) {
      setSmallStuck(true); // enlarge
      setEase(0.0); // slow a bit
    } else {
      setSmallStuck(false); // shrink
      setEase(DEFAULT_EASE); // back to OG speed
    }
    if (isNearGrowOne) {
      setGrow(true); // enlarge
      setEase(0.0); // slow a bit
    } else {
      setGrow(false); // shrink
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
    const fxScale = 1 - Math.abs(fxVelo * 25);

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
        largeStuck ? "is-large" : ""
      }
      ${smallStuck ? "is-small" : ""}
      ${grow ? "is-grow" : ""}
      `}
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
  @media (max-width: 1024px) {
    opacity: 0;
  }
  @media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px) 
  and (-webkit-min-device-pixel-ratio: 2) 
  and (orientation: landscape){
    opacity: 0;
  }
  div {
    z-index: 2;
    border-radius: 50%;
    width: 0.75rem;
    height: 0.75rem;
    border: 1px solid #ffc400;
    background-color: rgba(255, 196, 0, 100);
    opacity: 1;
    cursor: none;
    transform: translate(-42.5%, -42.5%);
    -webkit-transition: height 0.25s ease-in-out, width 0.25s ease-in-out,
      transform 0.25s ease-in-out, opacity 0.35s ease;
    transition: height 0.25s ease-in-out, width 0.25s ease-in-out,
      transform 0.25s ease-in-out, opacity 0.35s ease;
  }

  &.is-active {
    z-index: 2;
    div {
      background-color: #ffc400;
      width: 150px;
      height: 150px;
      opacity: 1;
      cursor: none;
    }
  }
  &.is-large {
    z-index: 2;
    div {
      background-color: #ffc400;
      width: 230px;
      height: 230px;
      opacity: 1;
      cursor: none;
    }
  }
  &.is-small {
    z-index: 90;
    div {
      background-color: #ffc400;
      width: 100px;
      height: 100px;
      opacity: 1;
      cursor: none;
    }
  }
  &.is-grow {
    z-index: 90;
    div {
      background-color: #ffc400;
      width: 180px;
      height: 180px;
      opacity: 1;
      cursor: none;
      transform: translate(-45%, -45%);
    }
  }
  &.is-swapped {
    div {
      background-color: #fff;
    }
    &.is-active {
      z-index: 2;
      div {
        background-color: #fff;
        width: 10rem;
        height: 10rem;
        opacity: 1;
        cursor: none;
      }
    }
  }
  &.is-menu {
    div {
    }
  }
`;
