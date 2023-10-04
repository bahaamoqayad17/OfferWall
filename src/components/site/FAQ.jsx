import React, { useState } from "react";
import Container from "@mui/material/Container";
import AnimatedTitle from "../AnimatedTitle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const items = [
  {
    title: "Are there any costs like setup fee etc.?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "What is Offerwall?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How can I receive my payout?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How often will I be able to receive my payout from Offerwall?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "In which platforms can I implement Offerwall?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Market Research",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];
const Number = styled("span")(({ theme, isActive }) => ({
  fontSize: "24px",
  fontWeight: 600,
  WebkitTextStroke: isActive ? "1px #414141" : "1px #1D1D1D80",
  color: isActive ? "#414141" : "#fff",
}));

const Image = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "-17%",
  right: "-10%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <>
      <section>
        <Container>
          <Box mb={10}>
            <AnimatedTitle
              title="Frequently Asked Questions"
              color={"#0079FF"}
              size={32}
              width={"25%"}
            />
          </Box>
          <Box
            sx={{
              maxWidth: 775,
              m: "auto",
              position: "relative",
            }}
          >
            <Image src="/accordion.svg" alt="test" />
            {items.map((item, index) => (
              <Accordion
                key={index}
                expanded={expandedIndex === index}
                onChange={handleChange(index)}
                sx={{ padding: "10px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                >
                  <Number isActive={expandedIndex === index}>
                    0{index + 1}
                  </Number>
                  <Typography ml={1} fontSize={"24px"} color={"#2A2A2A"}>
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
