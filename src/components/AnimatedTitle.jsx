import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimatedTitle = ({ title, color, size, width, mobileSize }) => {
  const [hovered, setHovered] = useState(false);

  const lineSpring = useSpring({
    width: hovered ? width : "0px",
    height: hovered ? "5px" : "0px",
    config: { tension: 300, friction: 20 },
  });
  const titleColor =
    title === "About Us"
      ? { color: "#0079FF", WebkitTextStroke: "1px #E5F2FF" }
      : { color: "#E5F2FF" };

  const springProps =
    title === "About Us"
      ? useSpring({
          top: hovered ? "7px" : "0px",
          color: hovered ? color : "#E5F2FF",
          WebkitTextStroke: hovered ? `1px ${color}` : "1px #80BCFF",
          config: { tension: 300, friction: 20 },
        })
      : useSpring({
          top: hovered ? "7px" : "0px",
          color: hovered ? color : color,
          config: { tension: 300, friction: 20 },
        });

  return (
    <div>
      <animated.h1
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={title === "About Us" ? "about-title" : ""}
        style={{
          fontSize: size,
          fontWeight: 800,
          position: "relative",
          cursor: "pointer",
          textAlign: "center",
          ...titleColor,
          ...springProps,
        }}
      >
        {title}
      </animated.h1>

      <center>
        <animated.div
          style={{
            backgroundColor: color,
            borderRadius: "300px",
            ...lineSpring,
          }}
        >
          <div className="dot"></div>
        </animated.div>
      </center>
    </div>
  );
};

export default AnimatedTitle;
