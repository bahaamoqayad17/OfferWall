import AboutUs from "@/components/site/AboutUs";
import Header from "@/components/site/Header";
import Monetize from "@/components/site/Monetize";
import SiteLayout from "@/components/site/SiteLayout";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import styled from "@emotion/styled";
import AnimatedTitle from "@/components/AnimatedTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";

const Item = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "89px 16px",
  textAlign: "center",
  backgroundColor: "#fff",
  borderRadius: 16,
  height: 435,

  "& h3": {
    fontSize: 24,
    color: "#2A2A2A",
    fontWeight: 500,
    marginBottom: 20,
  },
  "& p": {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 20,
    color: "#898989",
  },
}));

const WhyChooseUS = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  overflow: "hidden",
  paddingBottom: 250,
  paddingTop: 200,
  position: "relative",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: "url('/Bubbles.svg')",
}));

const WhyChooseUSItem = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: "8px 16px",
  alignItems: "center",
  height: 120,
}));

const items = [
  {
    title: "FASTER PAYMENTS",
    content:
      "Our modern, updated innovative platform allows you to view your stats in a more intuitive way, in real time, with pre-generated reports & custom reporting",
    icon: "./payment.svg",
  },
  {
    title: "USER FRIENDLY DASHBOARD",
    content:
      "We do our best to ensure our affiliate dashboard is easy to use. Your affiliate ID won't be shared to anyone",
    icon: "./dashboard.svg",
  },
  {
    title: "FAST & ACCURATE REPORTING",
    content:
      "Top tier developers enjoy much faster payments via paypal, check or Wire! Net-30 or faster!",
    icon: "./fast.svg",
  },
  {
    title: "ANTI-FRAUD MANAGEMENT",
    content:
      "Our Highly Sophisticated and Top- Notch Fraud Management system continuously monitors all affiliates traffic for any Fraudulent Behavior.",
    icon: "./anti-fraud.svg",
  },
  {
    title: "EXCLUSIVE OFFERS",
    content:
      "Offers with HIGH PAYOUTS that are not presented in other affiliate networks on a unique business model.",
    icon: "./offers.svg",
  },
  {
    title: "SUPPORT",
    content: "We have 24/7 Dedicated affiliate support.",
    icon: "./support.svg",
  },
];

const ChooseUSItems = [
  {
    title: "The Best Ad Platform",
    content: "We’re the #1 ad platform for apps and games worldwide.",
    icon: "./certificate.svg",
  },
  {
    title: "Exclusive Offers",
    content: "Give your users the best offers from top companies.",
    icon: "./offer.svg",
  },
  {
    title: "Global Monetization",
    content: "Earn from any user around the world.",
    icon: "./money.svg",
  },
  {
    title: "iFrame, API or SDK integration",
    content: "Notik is easily incorporated into any interface.",
    icon: "./coding.svg",
  },
  {
    title: "Statistics And Reporting",
    content: "Get crucial information to boost your marketing",
    icon: "./charts.svg",
  },
  {
    title: "Optimized for desktop / mobile and web",
    content: "Flawless integration for all your apps.",
    icon: "./desktop.svg",
  },
];

const Circle1 = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: "60%",
  left: "-12%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Circle2 = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "60%",
  right: "-12%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Page = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Monetize />

      <section className="features">
        <Container>
          <AnimatedTitle
            title="Our Features"
            color={"#0079FF"}
            size={38}
            width={"200px"}
          />
          <Typography
            textAlign={"center"}
            fontSize={32}
            color={"#414141"}
            my={2}
            mb={3}
          >
            Highlight the unique features that set your offerwall apart
          </Typography>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 4 },
            }}
          >
            {items.map((item, i) => (
              <>
                <SwiperSlide key={i}>
                  <Item key={i}>
                    <img style={{ marginBottom: 20 }} src={item.icon} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </Item>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </section>

      <WhyChooseUS>
        <Circle1 src="./Circle.svg" alt="" />
        <Circle2 src="./Circle.svg" alt="" />
        <Container>
          <Box mb={7}>
            <AnimatedTitle
              title="Why Choose US"
              color={"#fff"}
              size={32}
              width={"200px"}
            />
          </Box>

          <Grid position={"relative"} zIndex={5} container spacing={2}>
            {ChooseUSItems.map((item, i) => (
              <>
                <Grid item xs={12} md={4} key={i}>
                  <WhyChooseUSItem>
                    <img
                      style={{ objectFit: "cover" }}
                      src={item.icon}
                      alt=""
                    />
                    <Box ml={3}>
                      <Typography
                        color={"#393D46"}
                        fontSize={{ md: 20, xs: 18 }}
                        fontWeight={600}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        color={"#393D46"}
                        fontSize={{ md: 16, xs: 14 }}
                        fontWeight={400}
                      >
                        {item.content}
                      </Typography>
                    </Box>
                  </WhyChooseUSItem>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </WhyChooseUS>

      <FAQ />

      <Contact />
    </>
  );
};

export default Page;

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
