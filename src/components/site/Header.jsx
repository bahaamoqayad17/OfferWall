import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TypeAnimation } from "react-type-animation";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styled from "@emotion/styled";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import Router from "next/router";

const Circle = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
}));

const Header = () => {
  const [down, setDown] = useState(false);

  const SlideIn = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    delay: 1000,
    config: config.molasses,
  });

  const SlideInImage = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    delay: 1000,
    config: config.molasses,
  });
  return (
    <headerc className="header-page">
      <Container>
        <Box sx={{ display: "flex", position: "relative" }}>
          <animated.div style={SlideIn}>
            <Box>
              <TypeAnimation
                sequence={["OfferWall", 1000, "OfferWall - Monetize", 1000]}
                wrapper="h1"
                speed={2}
                className="header-title"
                style={{
                  fontSize: "56px",
                  fontWeight: 800,
                  color: "#0079FF",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
              <TypeAnimation
                sequence={["Your Web", 1000, "Your Web - App", 1000]}
                wrapper="h1"
                speed={2}
                className="header-title"
                style={{
                  fontSize: "56px",
                  fontWeight: 800,
                  color: "#0079FF",
                  display: "block",
                }}
                repeat={Infinity}
              />
              <Typography mb={3} mt={1} variant="body2" maxWidth={500}>
                Make your visitors as customers and turn your
                website/application/games profitable business for you with our
                monetizing platform
              </Typography>
              <Button
                sx={{ fontSize: 24, borderRadius: "500px", zIndex: 1 }}
                variant="contained"
                color="primary"
                onMouseEnter={() => setDown(true)}
                onMouseLeave={() => setDown(false)}
                onClick={() => Router.push("/register")}
              >
                Start Now &nbsp;{" "}
                {down ? (
                  <EastIcon fontSize="medium" />
                ) : (
                  <CallMadeIcon fontSize="medium" />
                )}
              </Button>
            </Box>
          </animated.div>

          <Box display={{ xs: "none", md: "block" }} className="header-image">
            <animated.div style={SlideInImage}>
              <img src="./Header.svg" alt="test" />
            </animated.div>
          </Box>
        </Box>
      </Container>
      <Circle src="./quarter-circle.svg" alt="test" />
    </headerc>
  );
};

export default Header;
