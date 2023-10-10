import UserLayout from "@/components/UserLayout";
import React from "react";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { updateMe } from "@/store/UserSlice";

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

const Label = styled("p")(({ theme }) => ({
  color: "#374151",
  fontSize: 18,
  fontWeight: 600,
  textAlign: "left",
  marginBottom: 8,
  marginTop: 16,
}));

const Page = () => {
  const [value, setValue] = useState(0);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  const [item, setItem] = useState(user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(updateMe(item));
  };

  return (
    <>
      <Box sx={{ p: 4 }}>
        <Container>
          <TitleHolder>
            <div className="before"></div> &nbsp; &nbsp;
            <Title>Account information</Title>
          </TitleHolder>

          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Card sx={{ borderRadius: "16px", padding: "32px" }}>
                <Box maxWidth={600}>
                  <TitleHolder>
                    <div className="before"></div> &nbsp; &nbsp;
                    <Title>Basic Information</Title>
                  </TitleHolder>

                  <Box mb={5} display={"flex"} justifyContent={"space-between"}>
                    <Tab
                      style={value === 0 ? {} : { backgroundColor: "#66AFFF" }}
                      onClick={() => setValue(0)}
                    >
                      Personal
                    </Tab>
                    <Tab
                      style={value === 1 ? {} : { backgroundColor: "#66AFFF" }}
                      onClick={() => setValue(1)}
                    >
                      Company
                    </Tab>
                  </Box>

                  {value === 0 && (
                    <>
                      <Box>
                        <Label>Email</Label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          disabled
                          value={item?.email}
                        />
                      </Box>

                      <Box>
                        <Label>Full Name</Label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          onChange={handleChange}
                          name="name"
                          value={item?.name}
                        />
                      </Box>

                      <Box>
                        <Label>Skype ID</Label>
                        <TextField
                          name="skype_id"
                          value={item?.skype_id}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                        />
                      </Box>

                      <Box>
                        <Label>Phone Number</Label>
                        <TextField
                          variant="outlined"
                          value={item?.mobile_number}
                          disabled
                          fullWidth
                        />
                      </Box>
                    </>
                  )}

                  {value === 1 && (
                    <>
                      <Box>
                        <Label>Company Name</Label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          disabled
                          value={item?.company_name}
                          placeholder="Bahaa Company"
                        />
                      </Box>
                      <Box>
                        <Label>Company Tax ID</Label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          disabled
                          value={item?.company_id}
                          placeholder="15455 545 544 54"
                        />
                      </Box>
                      <Box>
                        <Label>Website</Label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          disabled
                          value={item?.app_url}
                          placeholder="www.mohammedsrour.com"
                        />
                      </Box>
                    </>
                  )}

                  <Button
                    variant="contained"
                    sx={{
                      width: "200px",
                      height: "36px",
                      borderRadius: "4px",
                      mt: { xs: 5, md: "210px" },
                    }}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: "16px", padding: "32px", mb: 3 }}>
                <TitleHolder>
                  <div className="before"></div> &nbsp; &nbsp;
                  <Title>Password</Title>
                </TitleHolder>

                <Box>
                  <Label>Current password</Label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="*************"
                    type="password"
                  />
                </Box>

                <Box>
                  <Label>New password</Label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="*************"
                    type="password"
                  />
                </Box>

                <Box>
                  <Label>Confrim password</Label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="*************"
                    type="password"
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "36px",
                    borderRadius: "4px",
                    mt: 3,
                  }}
                >
                  Save
                </Button>
              </Card>

              <Card sx={{ borderRadius: "16px", padding: "32px" }}>
                <TitleHolder style={{ marginBottom: 0 }}>
                  <div className="before"></div> &nbsp; &nbsp;
                  <Title>Payment Method</Title>
                </TitleHolder>

                <FormControl>
                  <RadioGroup row name="row-radio-buttons-group">
                    <FormControlLabel
                      value="Paypal"
                      control={<Radio />}
                      label="Paypal"
                    />
                    <FormControlLabel
                      value="Bank"
                      control={<Radio />}
                      label="Bank Wire"
                    />
                  </RadioGroup>
                </FormControl>

                <Box>
                  <Label>Email</Label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="m.reyad.s@gmail.com"
                    type="email"
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "36px",
                    borderRadius: "4px",
                    mt: 3,
                  }}
                >
                  Save
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;

export default Page;
