import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SiteLayout from "@/components/site/SiteLayout";
import styled from "@emotion/styled";
import User from "@/icons/User";
import Mail from "@/icons/Mail";
import Company from "@/icons/Company";

const Label = styled("p")(({ theme }) => ({
  color: "#1F2937",
  fontSize: 16,
  fontWeight: 500,
  textAlign: "left",
  marginBottom: 8,
  marginTop: 16,
}));

const Page = () => {
  return (
    <>
      <section>
        <Container>
          <Typography
            fontWeight={700}
            fontSize={38}
            color={"primary"}
            component={"h1"}
            mb={5}
          >
            Contact
          </Typography>

          <Grid container>
            <Grid item xs={12} md={6}>
              <Box>
                <Label>Full Name</Label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder="Full name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <User />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <Label>Email Address</Label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder="m.reyad.s@gmail.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <Label>Subject</Label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder="Company name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Company />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box>
                <Label>Your Message</Label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder="Type Your Message Here"
                  multiline
                  rows={4}
                />
              </Box>

              <Button
                sx={{ width: 200, height: 36, mt: 2, borderRadius: "4px" }}
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Page;
