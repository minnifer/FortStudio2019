import React from "react";
import { useAnimationFrame } from "./useAnimationFrame";
import { connect, styled } from "frontity";

const math = {
  lerp: (a, b, n) => {
    return (1 - n) * a + n * b;
  }
};

const DEFAULT_EASE = 0.10;
const DIST = 100;

export default function YourMouse() {
  const [ease, setEase] = React.useState(DEFAULT_EASE);
  // These two are state since their changes need to rerender the div
  // because they affect its characteristics, which means React will ERASE them
  // from the DOM if we don't persist them
  const [transform, setTransform] = React.useState("");
  const [stuck, setStuck] = React.useState(false);
  // These are all just collections of data which don't necessary need a new
  // render from React (i.e. our little div) so we jsut keep them updated and
  // let the RAF callback use them as it will.
  // You could consolidate these into one REF that is your previous `this.data` basically too.
  const cursorRef = React.useRef();
  const targets = React.useRef([]);
  const currentPos = React.useRef([0, 0]);
  const lastPos = React.useRef([0, 0]);

  // memoized, never changes
  const mousePos = React.useCallback(ev => {
    currentPos.current = [ev.pageX, ev.pageY];
  }, []);

  // runs once on mount
  React.useEffect(() => {
    // setup targets once
    const stickies = [...document.querySelectorAll("[data-stick-cursor]")];
    targets.current = stickies.map(ele => {
      const bounds = ele.getBoundingClientRect();

      return {
        el: ele,
        x: bounds.left + bounds.width / 2,
        y: bounds.top + bounds.height / 2
      };
    });

    // mouse follower and cleanup
    window.addEventListener("mousemove", mousePos, { passive: true });
    return () =>
      window.removeEventListener("mousemove", mousePos, { passive: true });
  }, []);

  useAnimationFrame(deltaTime => {
    // check collisions
    let isNearOne = false;
    targets.current.forEach(target => {
      const d = {
        x: target.x - currentPos.current[0],
        y: target.y - currentPos.current[1]
      };

      const a = Math.atan2(d.x, d.y);
      const h = Math.sqrt(d.x * d.x + d.y * d.y);

      if (h < DIST && !stuck) {
        isNearOne = true;
        // pull towards this target
        currentPos.current[0] = target.x - (Math.sin(a) * h) / 2.5;
        currentPos.current[1] = target.y - (Math.cos(a) * h) / 2.5;
      }
    });

    if (isNearOne) {
      setStuck(true); // enlarge
      setEase(0.075); // slow a bit
    } else {
      setStuck(false); // shrink
      setEase(DEFAULT_EASE); // back to OG speed
    }

    // Do the maths
    const [currentX, currentY] = currentPos.current;
    const [lastPosX, lastPosY] = lastPos.current;
    const lastX = math.lerp(lastPosX, currentX, ease);
    const lastY = math.lerp(lastPosY, currentY, ease);

    const fxDiff = currentX - lastX;
    const fxAcc = fxDiff / window.innerWidth;
    const fxVelo = +fxAcc;
    const fxScale = 1 - Math.abs(fxVelo * 5);

    const transform = `translate3d(${lastX}px, ${lastY}px, 0) scale(${fxScale})`;

    // update lastpot without rerendering
    lastPos.current = [lastX, lastY];
    // force rerender to update transform CSS
    setTransform(transform);
  });

  return (
    <Cursor
      ref={cursorRef}
      className={`cursor ${stuck ? "is-active" : ""}`}
      data-cursor
      style={{ transform }}
    >
      <div />
    </Cursor>
  );
}

const Cursor = styled.div`
  position: fixed;
  top: -.5rem;
  left: -.5rem;
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;

  div {
    z-index: 2;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 1px solid #ffc400;
    background-color: #ffc400;
    opacity:1;
    cursor: none;
    transition: transform 0.5s ease, opacity 0.35s ease;
  }

  &.is-active {
    div {
      background-color: #ffc400;
      transform: scale(10);
      opacity: 1;
      cursor: none;
    }
  }
`;
