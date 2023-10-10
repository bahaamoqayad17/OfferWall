import UserLayout from "@/components/UserLayout";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import NewApp from "@/components/modals/NewApp";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import InputAdornment from "@mui/material/InputAdornment";
import Copy from "@/icons/Copy";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { myApps } from "@/store/AppSlice";

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

const Label = styled("p")(({ theme }) => ({
  color: "#374151",
  fontSize: 18,
  fontWeight: 600,
  textAlign: "left",
  marginBottom: 8,
  marginTop: 16,
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

const App = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "16px",
  backgroundColor: "#F9FAFB",
  borderRadius: "8px",
  boxShadow: "0px 0px 2px 0px rgba(6, 25, 56, 0.05)",
  marginBottom: "8px",
  justifyContent: "space-around",
}));

const PostBack = [
  {
    //user:
    headers: "Parameter",
    values: ["userid", "Your Site/App unique user ID", "3856 or john"],
  },
  {
    // reward:
    headers: "Currency",
    values: ["reward", "Your currency amount", "150"],
  },
  {
    //payout:
    headers: "Payout",
    values: ["camp_id", "Your actual payout in $", "0.506"],
  },
  {
    //campaign_name:
    headers: "Campaign name",
    values: ["camp_name", "Name of the Campaign", "Survey XYZ"],
  },
  {
    //campaign_id:
    headers: "Campaign ID",
    values: ["camp_id", "ID of the Campaign", "45464343 or ghb4544uhd"],
  },
  {
    //transaction:
    headers: "Transaction ID",
    values: ["transaction_id", "Unique transaction ID", "rfhu45uh-4554jbfhr"],
  },
  {
    //status:
    headers: "Status",
    values: [
      "1 = credit , 2 = reversal",
      "Status of the transaction",
      "1 or 2",
    ],
  },
  {
    //publishers:
    headers: "Publisher ID",
    values: ["publisher_id", "Your account ID", "120"],
  },
  {
    //app:
    headers: "App ID",
    values: ["app_id", "Your Site/App ID", "rfhu45uh-4554jbfhr"],
  },
];

const Page = () => {
  const [value, setValue] = useState(0);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const { apps } = useSelector((state) => state.apps);
  const [item, setItem] = useState({
    _id: "2f7483cd-dece-4532-b586-c43b177d855a",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(item._id);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    dispatch(myApps());
  }, []);

  return (
    <div>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  padding: "32px",
                  borderRight: "1px solid rgba(0, 0, 0, 0.10)",
                }}
              >
                <TitleHolder>
                  <div className="before"></div> &nbsp; &nbsp;
                  <Title>All Apps</Title>
                </TitleHolder>

                <NewApp />

                {apps.map((item, i) => (
                  <App key={i}>
                    <img src={item.icon} alt="test" />
                    <Box>
                      <Typography
                        fontSize={18}
                        fontWeight={600}
                        color={"#374151"}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        color={"#757575"}
                        fontSize={14}
                        fontWeight={400}
                      >
                        {item.url}
                      </Typography>
                    </Box>
                  </App>
                ))}
              </Card>
            </Grid>

            <Grid item xs={12} md={9}>
              <Card sx={{ padding: "32px" }}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  width={"67%"}
                  justifyContent={"space-between"}
                  mb={2}
                >
                  <TitleHolder style={{ alignItems: "center" }}>
                    <div
                      className="before"
                      style={{ backgroundColor: "#0079FF" }}
                    ></div>{" "}
                    &nbsp; &nbsp;
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        fontWeight={600}
                        fontSize={18}
                        color={"#374151"}
                      >
                        Mohammed app
                      </Typography>
                      <Typography fontSize={14} color="#757575">
                        https://www.rewardxp.com
                      </Typography>
                    </Box>
                  </TitleHolder>

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{ width: "60%" }}
                    value={item._id}
                    disabled
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          sx={{ cursor: "pointer" }}
                          onClick={handleCopy}
                          position="end"
                        >
                          <Tooltip title={copied ? "Copied!" : "Copy"}>
                            <Copy onClick={() => handleCopy()} />
                          </Tooltip>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box
                  mb={5}
                  width={"90%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Tab
                    style={value === 0 ? {} : { backgroundColor: "#66AFFF" }}
                    onClick={() => setValue(0)}
                  >
                    Basic Info
                  </Tab>
                  <Tab
                    style={value === 1 ? {} : { backgroundColor: "#66AFFF" }}
                    onClick={() => setValue(1)}
                  >
                    Postback
                  </Tab>
                  <Tab
                    style={value === 2 ? {} : { backgroundColor: "#66AFFF" }}
                    onClick={() => setValue(2)}
                  >
                    Integration
                  </Tab>
                </Box>

                {value === 0 && (
                  <>
                    <Box>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Box width={"48%"}>
                          <Box>
                            <Label>App Name</Label>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              fullWidth
                              placeholder="Mohammed app"
                            />
                          </Box>
                          <Box>
                            <Label>App URL</Label>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              fullWidth
                              placeholder="www.rewardxp.com"
                            />
                          </Box>
                          <Box>
                            <Label>Currency Name</Label>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              fullWidth
                              placeholder="Add Currency Name"
                            />
                          </Box>
                          <Box>
                            <Label>Currency Multiplyer</Label>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              fullWidth
                              placeholder="example 0.50 for 50% of $1 payout"
                            />
                          </Box>
                        </Box>

                        <Box width={"48%"}>
                          <TitleHolder style={{ alignItems: "center" }}>
                            <div className="before"></div> &nbsp; &nbsp;
                            <Typography
                              color={"#374151"}
                              fontSize={18}
                              fontWeight={600}
                            >
                              Currency Calculator
                            </Typography>
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
                                  Payout
                                </TableCell>
                                <TableCell>Currnecy</TableCell>
                                <TableCell
                                  sx={{
                                    borderTopRightRadius: "8px",
                                    borderBottomRightRadius: "8px",
                                  }}
                                >
                                  Description
                                </TableCell>
                              </TableRow>
                            </TableHead>

                            <TableBody>
                              {[1, 2, 3].map((item, i) => (
                                <TableRow
                                  sx={{ backgroundColor: "#F9FAFB" }}
                                  key={i}
                                >
                                  <TableCell
                                    sx={{ borderRadius: "8px" }}
                                    key={i}
                                  >
                                    $1
                                  </TableCell>
                                  <TableCell
                                    sx={{ borderRadius: "8px" }}
                                    key={i}
                                  >
                                    GG
                                  </TableCell>
                                  <TableCell
                                    sx={{ borderRadius: "8px" }}
                                    key={i}
                                  >
                                    If payout is $1, user will receive
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
                {value === 1 && (
                  <>
                    <Box mb={5} maxWidth={550}>
                      <Label>Postback URL</Label>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        placeholder="https://yourdomain.com/postback or https://yourdomain.com/postback.php"
                      />
                    </Box>

                    <TitleHolder style={{ alignItems: "center" }}>
                      <div className="before"></div> &nbsp; &nbsp;
                      <Typography
                        fontWeight={600}
                        fontSize={18}
                        color={"#374151"}
                      >
                        Postback Params (Method POST)
                      </Typography>
                    </TitleHolder>
                    <Grid container spacing={2}>
                      {PostBack.map((item, i) => (
                        <Grid key={i} item xs={12} md={6}>
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
                                  {item.headers}
                                </TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell
                                  sx={{
                                    borderTopRightRadius: "8px",
                                    borderBottomRightRadius: "8px",
                                  }}
                                >
                                  Example
                                </TableCell>
                              </TableRow>
                            </TableHead>

                            <TableBody>
                              <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                                {item.values.map((val, i) => (
                                  <TableCell
                                    sx={{ borderRadius: "8px" }}
                                    key={i}
                                  >
                                    {val}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Grid>
                      ))}
                    </Grid>

                    <Button
                      variant="contained"
                      sx={{
                        width: "200px",
                        height: "36px",
                        borderRadius: "4px",
                        mt: 5,
                      }}
                    >
                      Save
                    </Button>
                  </>
                )}

                {value === 2 && (
                  <>
                    <Box width={"60%"}>
                      <Box>
                        <Label>Direct Link</Label>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          fullWidth
                          disabled
                          placeholder="https://yourdomain.com/postback or https://yourdomain.com/postback.php"
                        />
                      </Box>
                      <Box>
                        <Label>iFrame</Label>
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
                    </Box>
                  </>
                )}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;

export default Page;
