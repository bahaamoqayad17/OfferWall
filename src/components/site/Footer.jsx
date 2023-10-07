import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import styled from "@emotion/styled";
import LinkedIn from "@/icons/LinkedIn";

const Circle1 = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: "0%",
  left: "0%",
}));

const Circle2 = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "0%",
  right: "0%",
}));

const Image = styled("img")(({ theme }) => ({}));

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1F2937",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Circle1 src="./Circle-gray-left.svg" alt="test" />
      <Circle2 src="./Circle-gray-right.svg" alt="test" />
      <Container sx={{ py: 10, pb: 5 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={6} item>
            <Image src="./logo-white.svg" alt="test" />
            <Typography maxWidth={300}>
              Make your visitors as customers and turn your
              website/application/games profitable business for you with our
              monetizing platform.
            </Typography>
          </Grid>

          <Grid xs={12} sm={6} md={2} item>
            <ul>
              <li style={{ marginBottom: "7px" }}>
                <Link href={"/"}>Home</Link>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <Link href={"/"}>TOS</Link>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <Link href={"/#Monetize"}>Monetize</Link>
              </li>
            </ul>
          </Grid>

          <Grid xs={12} sm={6} md={1} item>
            <Box mb={1.5}>
              <Link
                href={"/"}
                style={{ display: "flex", alignItems: "center" }}
              >
                <LinkedIn /> &nbsp; LinkedIn
              </Link>
            </Box>
            <Link href={"/"} style={{ display: "flex", alignItems: "center" }}>
              <Image src="/skype-footer.svg" alt="test" />
              &nbsp; Skype
            </Link>
          </Grid>

          <Grid xs={12} sm={6} md={3} item>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FmdGoodIcon /> MH56+WP7, Av. des Diambars, Dakar, Sénégal
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon /> +970567668383
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <MailOutlineIcon />
              m.reyad.s@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: "center", mt: 5 }}>
          Copyrights © 2023
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
