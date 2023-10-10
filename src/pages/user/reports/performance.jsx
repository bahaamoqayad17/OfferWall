import UserLayout from "@/components/UserLayout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import DataTable from "@/components/GlobalComponents/DataTable";
import { DatePicker } from "@mui/x-date-pickers";
import { Search } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useState } from "react";

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
}));

const Page = () => {
  const [item, setItem] = useState({});

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const getPagination = (page, limit) => {
    console.log("test");
  };

  return (
    <>
      <Box sx={{ p: 4 }}>
        <Container>
          <Card sx={{ padding: "32px" }}>
            <TitleHolder>
              <div className="before"></div> &nbsp; &nbsp;
              <Title>Performance Report</Title>
            </TitleHolder>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"80%"}
              mb={5}
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
                sx={[style, { width: 320 }]}
                onChange={(val) =>
                  handleChange({ target: { name: "start_date", value: val } })
                }
                renderInput={(params) => <TextField {...params} />}
              />

              <DatePicker
                name="end_date"
                value={item.end_date}
                placeholder="Start Date"
                sx={[style, { width: 320 }]}
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

            <DataTable model={"reports"} getPagination={getPagination} />
          </Card>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;

export default Page;
