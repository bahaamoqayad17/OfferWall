import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

const Section = styled("section")(({ theme }) => ({
  position: "relative",
  marginTop: "100px",
  marginBottom: "100px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  },
}));

const Background = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "200%",
  height: "89%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(-4deg)",
  backgroundColor: "#3394FF",
  backgroundImage: "url('/Bubbles.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));

const Line = styled("div")(() => ({
  width: "100%",
  height: "5px",
  backgroundColor: "#fff",
}));

const Item = styled("div")(({ theme }) => ({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  height: "252px",
  borderRadius: "16px",
  position: "relative",
  textAlign: "center",
}));

const Icon = styled("div")(({ theme }) => ({
  backgroundColor: "#F5E6E6",
  borderRadius: "16px",
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

const Number = styled("div")(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 600,
  WebkitTextStroke: "1px #1D1D1D80",
  position: "absolute",
  top: 13,
  left: 25,
  color: "#fff",
  "&:hover": {
    WebkitTextStroke: "1px #414141",
    color: "#414141",
  },
}));

const items = [
  {
    title: "Offerwall",
    content: "Add an iframe to your web and reward your users.",
    icon: "./global.svg",
  },
  {
    title: "Offer API",
    content: "We allow selected publishers to hand pick our offers.",
    icon: "./cpu.svg",
  },
  {
    title: "Mobile SDK",
    content: "Monetize your apps with our this service.",
    icon: "./mobile-sdk.svg",
  },
  {
    title: "Market Research",
    content: "We thrive to supply your web/app with the best rewarded ",
    icon: "./foot.svg",
  },
];

const Monetize = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    initialInView: true,
  });

  const ImageOneSpring = useSpring({
    transform: inView ? "translate(-41%, 90%)" : "translate(300%, -65%)",
    delay: 1000,
    config: { tension: 20, friction: 10 },
  });

  const ImageTwoSpring = useSpring({
    transform: inView ? "translate(300%, -65%)" : "translate(-41%, 90%)",
    delay: 1000,
    config: { tension: 20, friction: 20 },
  });

  const MobileImage = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0%)" : "translateX(100%)",
    },
    delay: 1000,
    config: { tension: 20, friction: 20 },
  });

  const Card = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0%)" : "translateX(-100%)",
    },
    delay: 1000,
    config: { tension: 20, friction: 20 },
  });

  const Content = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0%)" : "translateY(-100%)",
    },
    delay: 1000,
    config: { tension: 20, friction: 20 },
  });

  return (
    <Section id="Monetize" ref={ref}>
      <animated.img
        src={"./Circle.svg"}
        style={{ zIndex: 5, position: "absolute", ...ImageOneSpring }}
      ></animated.img>

      <animated.img
        src={"./Circle.svg"}
        style={{
          zIndex: 5,
          position: "absolute",
          ...ImageTwoSpring,
        }}
      ></animated.img>
      <Background />
      <Container sx={{ zIndex: 5, position: "relative" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <animated.div style={Card}>
              <Grid container spacing={4}>
                {items.map((item, index) => (
                  <>
                    <Grid item md={6} xs={12}>
                      <Item>
                        <Number>0{++index}</Number>
                        <Icon>
                          <Image src={item.icon} alt="test" />
                        </Icon>
                        <Typography my={1} fontSize={24} fontWeight={700}>
                          {item.title}
                        </Typography>
                        <Typography
                          fontSize={20}
                          fontWeight={500}
                          color={"#A0A0A0"}
                        >
                          {item.content}
                        </Typography>
                      </Item>
                    </Grid>
                  </>
                ))}
              </Grid>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={3} color={"#fff"} mt={15}>
            <animated.div style={Content}>
              <Typography fontSize={50} fontWeight={700}>
                Monetize
              </Typography>
              <Line />
              <Typography mt={2} fontSize={28} fontWeight={600}>
                How publishers can monetize their apps or websites using your
                platform.
              </Typography>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <center>
              <animated.div style={MobileImage}>
                <img src="./mobile.svg" alt="test" />
              </animated.div>
            </center>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Monetize;
