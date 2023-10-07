/* eslint-disable */
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Conatiner from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import AnimatedTitle from "../AnimatedTitle";

const Title = styled("p")(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 600,
  color: "#414141",
  marginBottom: "20px",
}));

const Content = styled("p")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 400,
  color: "#a0a0a0",
  marginBottom: 20,
}));

const Icon = styled("div")(({ theme }) => ({
  backgroundColor: "#E5F2FF",
  borderRadius: "50%",
  width: "72px",
  height: "72px",
  position: "relative",
}));

const Image = styled("img")(({ theme }) => ({
  transform: "translate(-50%, -50%)",
  position: "absolute",
  top: "50%",
  left: "50%",
}));

const AboutImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const items = [
  {
    title: "500k+",
    content: "Surveys Completed",
    icon: "./clipboard-tick.svg",
    hoveredIcon: "./clipboard-orange.svg",
  },
  {
    title: "Campaigns",
    content: "Sureys Inventory",
    icon: "./cubes.svg",
    hoveredIcon: "./cubes-orange.svg",
  },
  {
    title: "1000+",
    content: "Total Publishers",
    icon: "./gift.svg",
    hoveredIcon: "./gift-orange.svg",
  },
];

const AboutUs = () => {
  const [itemHover, setItemHover] = useState(null);

  const itemSprings = items.map(() =>
    useSpring({
      top: "0px",
      color: "#fff",
      backgroundColor: "#0079FF",
      config: { tension: 300, friction: 20 },
    })
  );

  return (
    <>
      <section id="about">
        <Conatiner>
          <Card
            sx={{
              pt: { md: 20, xs: 5 },
              pr: 5,
              pb: { md: 10, xs: 5 },
              px: { md: 0, xs: 3 },
              borderRadius: "32px",
            }}
          >
            <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
              <Box>
                <AnimatedTitle
                  title="About Us"
                  color={"#0079FF"}
                  size={"82px"}
                  width={"300px"}
                  mobileSize={"60px"}
                />
                <AboutImage src="./about.svg" alt="test" />
              </Box>
              <Box sx={{ px: { md: 11, xs: 2 } }}>
                <Title>The Best OfferWall Offers To Boost Your Profits</Title>
                <Content>
                  Our desire to always be ahead of innovations and the online
                  marketing world. We specialise in surveys offers. We provide
                  the best surveys offers from premium advertisers and ensure
                  competitive payments for our affiliates. What makes us so
                  rewarding to work with is our immediate and personalised
                  support and high traffic monetisation.
                </Content>
              </Box>
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-around"}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              {items.map((item, i) => (
                <animated.div
                  key={i}
                  onMouseEnter={() => {
                    itemSprings[i].top.start("-7px");
                    itemSprings[i].color.start("#000");
                    itemSprings[i].backgroundColor.start("#E5ECF6");
                  }}
                  onMouseLeave={() => {
                    itemSprings[i].top.start("0px");
                    itemSprings[i].color.start("#fff");
                    itemSprings[i].backgroundColor.start("#0079FF");
                  }}
                  className="about-item"
                  style={{
                    ...itemSprings[i],
                  }}
                >
                  <Icon>
                    <Image
                      src={itemHover === i ? item.hoveredIcon : item.icon}
                      alt="test"
                    />
                  </Icon>
                  <Box ml={2}>
                    <Typography fontSize={{ md: 36, xs: 24 }} fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography fontSize={{ md: 20, xs: 16 }} fontWeight={600}>
                      {item.content}
                    </Typography>
                  </Box>
                </animated.div>
              ))}
            </Box>
          </Card>
        </Conatiner>
      </section>
    </>
  );
};

export default AboutUs;
