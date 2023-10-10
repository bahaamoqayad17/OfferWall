import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import Android from "@/icons/Android";
import CPE from "@/icons/CPE";
import Wallet from "@/icons/Wallet";
import Router from "next/router";

const Offer = styled("div")(({ theme }) => ({
  display: "flex",
  border: "1px solid #8D8D8D",
  borderRadius: "8px",
  padding: "16px",
}));

const Tab = styled("div")(({ theme }) => ({
  padding: "8px 16px 8px 12px",
  height: "36",
  backgroundColor: "#0079FF",
  color: "#fff",
  fontWeight: 700,
  fontSize: 18,
  cursor: "pointer",
  borderRadius: "4px",
  width: "270px",
  textAlign: "center",
}));

const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "100px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.03)",
  padding: "16px",
}));

const Offers = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Nav>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => Router.push("/")}
          src="/logo.svg"
          alt="test"
        />
      </Nav>
      <section>
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={5}
          >
            <Typography mb={5} component={"h1"} fontSize={57} fontWeight={500}>
              Offers & Games
            </Typography>

            <Box
              width={"35%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Tab
                style={
                  value === 0
                    ? { backgroundColor: "#0079FF" }
                    : { backgroundColor: "#66AFFF" }
                }
                onClick={() => setValue(0)}
              >
                Surveys
              </Tab>
              <Tab
                onClick={() => setValue(1)}
                style={
                  value === 1
                    ? { backgroundColor: "#0079FF" }
                    : { backgroundColor: "#66AFFF" }
                }
              >
                Offers & Games
              </Tab>
            </Box>
          </Box>

          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 61, 8, 9].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Offer>
                  <img src="/offer-image.svg" alt="test" />
                  <Box ml={2} width={"100%"}>
                    <Box maxWidth={260}>
                      <Typography
                        color={"#414141"}
                        fontSize={20}
                        fontWeight={700}
                      >
                        Go Match Tiles
                      </Typography>
                      <Typography
                        color={"#414141"}
                        fontSize={16}
                        fontWeight={400}
                      >
                        Go Match Tiles هي لعبة مطابقة ثلاثية فريدة تعتمد
                      </Typography>

                      <Box
                        mb={1}
                        display={"flex"}
                        color={"#8D8D8D"}
                        fontSize={14}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <img src="/Android-icon.svg" alt="test" />
                          &nbsp; Android
                        </Box>
                        <Box display={"flex"} mx={1}>
                          <img src="/receipt.svg" alt="test" />
                          &nbsp; CPE
                        </Box>
                        <Box display={"flex"}>
                          <img src="/empty-wallet-tick.svg" alt="test" />
                          &nbsp; Free
                        </Box>
                      </Box>
                    </Box>
                    <Button
                      fullWidth
                      sx={{
                        borderRadius: "4px",
                        textAlign: "center",
                        fontSize: 18,
                      }}
                      variant="contained"
                    >
                      GC 2,880
                    </Button>
                  </Box>
                </Offer>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Offers;
