import React, { useState } from "react";
import UserLayout from "../../components/UserLayout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DataTable from "@/components/GlobalComponents/DataTable";
import { DatePicker } from "@mui/x-date-pickers";
import { Search } from "@mui/icons-material";
import styled from "@emotion/styled";
import Graph from "@/components/site/Graph";
import { Typography } from "@mui/material";

const style = { my: 1, backgroundColor: "#fff" };

const TitleHolder = styled("div")(({ theme }) => ({
  display: "flex",
  marginBottom: 20,
  marginTop: 20,
}));

const Title = styled("p")(({ theme }) => ({
  fontSize: 24,
  color: "#6B6B6B",
  fontWeight: 600,
  marginBottom: 20,
}));

const StatsItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "16px",
  backgroundColor: "#E5ECF6",
  borderRadius: "8px",
  boxShadow: "0px 1px 2px 0px rgba(6, 25, 56, 0.05)",
  marginBottom: "8px",
  width: "305px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Stats = [
  {
    title: "Clicks",
    value: "25",
    icon: "/click.svg",
  },
  {
    title: "Revenue",
    value: "3",
    icon: "/revenue.svg",
  },
  {
    title: "Leads",
    value: "28",
    icon: "/leads.svg",
  },
  {
    title: "EPC",
    value: "$ 78",
    icon: "/epc.svg",
  },
];

const Page = () => {
  const [item, setItem] = useState({});
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const getPagination = (page, limit) => {
    console.log(page, limit);
  };

  return (
    <>
      <Box sx={{ p: 4 }}>
        <Container>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"85%"}
          >
            <TextField
              onChange={handleChange}
              sx={style}
              value={item.search}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="medium">
                      <Search />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Search"
              name="search"
              variant="outlined"
            />

            <DatePicker
              name="start_date"
              value={item.start_date}
              placeholder="Start Date"
              sx={[style, { width: 300 }]}
              onChange={(val) =>
                handleChange({ target: { name: "start_date", value: val } })
              }
              renderInput={(params) => <TextField {...params} />}
            />

            <DatePicker
              name="end_date"
              value={item.end_date}
              placeholder="Start Date"
              sx={[style, { width: 300 }]}
              onChange={(val) =>
                handleChange({ target: { name: "end_date", value: val } })
              }
              renderInput={(params) => <TextField {...params} />}
            />

            <Button
              sx={{ width: 200, height: 50, fontSize: 20 }}
              variant="contained"
            >
              Filter
            </Button>
          </Box>

          <Box>
            <TitleHolder>
              <div className="before"></div> &nbsp; &nbsp;
              <Title>General Statistics</Title>
            </TitleHolder>
            <Box display={"flex"} justifyContent={"space-between"}>
              {Stats.map((item, i) => (
                <>
                  <StatsItem key={i}>
                    <img src={item.icon} alt="test" />
                    <Box ml={1.5}>
                      <Typography
                        fontSize={18}
                        color={"#374151"}
                        fontWeight={600}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontSize={18}
                        color={"#374151"}
                        fontWeight={600}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </StatsItem>
                </>
              ))}
            </Box>
          </Box>

          <Box>
            <TitleHolder>
              <div className="before"></div> &nbsp; &nbsp;
              <Title>Top Performing Offers</Title>
            </TitleHolder>

            <DataTable model={"offers"} getPagination={getPagination} />
          </Box>

          <Grid mt={3} container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box>
                <TitleHolder>
                  <div className="before"></div> &nbsp; &nbsp;
                  <Title>Top Performing GEO</Title>
                </TitleHolder>
                <DataTable model={"reversal"} getPagination={getPagination} />
              </Box>
              <Box mt={5}>
                <TitleHolder>
                  <div className="before"></div> &nbsp; &nbsp;
                  <Title>Reversal</Title>
                </TitleHolder>
                <DataTable model={"reversal"} getPagination={getPagination} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Graph />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;

export default Page;
