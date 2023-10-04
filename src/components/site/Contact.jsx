import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Item = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  "& h3": {
    fontSize: 72,
    color: "#fff",
    fontWeight: 700,
  },
  "& p": {
    fontSize: 32,
    fontWeight: 600,
    color: "#fff",
  },
  "& img": {
    marginTop: 30,
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& h3": {
      fontSize: 50,
    },
    "& p": {
      fontSize: 20,
    },
    "& img": {
      width: "100%",
    },
  },
}));

const Contact = () => {
  return (
    <>
      <Container>
        <section>
          <Box
            sx={{ backgroundColor: "#0079FF", py: 5, px: 1, borderRadius: 8 }}
          >
            <Item>
              <h3>Get In Touch</h3>
              <p>Ready to get started?</p>
              <p>Send us an email at m.reyad.s@gmail.com</p>
              <img src="./contact.png" alt="test" />
            </Item>
          </Box>
        </section>
      </Container>
    </>
  );
};

export default Contact;
