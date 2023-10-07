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

          <Grid container spacing={2}>
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
            <Grid item xs={12} md={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167703411779!2d-106.9549504!3d44.797770799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655555%3A0x3265c73ab4e065e!2zMzAgTiBHb3VsZCBTdCBTVEUgU1QgUiwgU2hlcmlkYW4sIFdZIDgyODAx2Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1696661980168!5m2!1sar!2s"
                width="100%"
                height="520"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Page;
