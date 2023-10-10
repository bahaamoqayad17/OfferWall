import UserLayout from "@/components/UserLayout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import DataTable from "@/components/GlobalComponents/DataTable";
import styled from "@emotion/styled";
import { useState } from "react";

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

  const getPagination = (page, limit) => {
    console.log("test");
  };

  return (
    <>
      <Box sx={{ p: 4 }}>
        <Container>
          <Card sx={{ padding: "32px" }}>
            <Grid mb={5} container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box>
                  <TitleHolder>
                    <div className="before"></div> &nbsp; &nbsp;
                    <Title>Billing Reports</Title>
                  </TitleHolder>
                  <Table>
                    <TableHead
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "#0079FF",
                        textAlign: "center",
                      }}
                    >
                      <TableRow>
                        <TableCell
                          sx={{
                            borderTopLeftRadius: "8px",
                            borderBottomLeftRadius: "8px",
                          }}
                        >
                          Balance
                        </TableCell>
                        <TableCell>Earnings MTD</TableCell>
                        <TableCell
                          sx={{
                            borderTopRightRadius: "8px",
                            borderBottomRightRadius: "8px",
                          }}
                        >
                          Reversals MTD
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                        <TableCell sx={{ borderRadius: "8px" }}>
                          $ 0.05454
                        </TableCell>
                        <TableCell sx={{ borderRadius: "8px" }}>$ 1</TableCell>
                        <TableCell sx={{ borderRadius: "8px" }}>$ 5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <TitleHolder>
                    <div className="before"></div> &nbsp; &nbsp;
                    <Title>Please Note</Title>
                  </TitleHolder>

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    sx={{
                      backgroundColor: "#D2EDF7",
                    }}
                    className="iframe"
                    disabled
                    value={
                      '<iframe src="https://www.surveyxa.com/offerwall?id=2f7483cd-dece-4532-b586-c43b177d855a&uid=[USERID]" height="800px" width="100%"></iframe>'
                    }
                  />
                </Box>
              </Grid>
            </Grid>

            <DataTable model={"reports"} getPagination={getPagination} />
          </Card>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;

export default Page;
