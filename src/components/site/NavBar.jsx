import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Router, { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const drawerWidth = 240;
const navItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "#about" },
  { title: "Monetize", link: "#Monetize" },
  { title: "Contact", link: "/contact" },
  { title: "Login", link: "/login" },
];

const Image = styled("img")(({ theme }) => ({}));

function NavBar(props) {
  const { window } = props;
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ p: 2 }}>
        <Image
          onClick={() => Router.push("/")}
          style={{ cursor: "pointer", marginTop: 4 }}
          src="/logo.svg"
          alt="test"
        />

        <List>
          {navItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(`/${item.link}`);
                }}
                sx={{ px: 0 }}
              >
                <ListItemText primary={t(item.title)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Button
          onClick={() => Router.push("/login")}
          fullWidth
          sx={{ mb: 2 }}
          variant="contained"
        >
          Login
        </Button>
        <Button
          onClick={() => Router.push("/register")}
          fullWidth
          variant="outlined"
        >
          Register
        </Button>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "80px" }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundImage: "linear-gradient(#fff 0%, #fff 100%)",
          height: "80px",
          pt: 1,
        }}
        elevation={0}
        component="nav"
      >
        <Toolbar>
          <IconButton
            sx={{
              display: { sm: "flex", xs: "flex", md: "none" },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Image
              onClick={() => Router.push("/")}
              style={{ cursor: "pointer", marginTop: 4 }}
              src="/logo.svg"
              alt="test"
            />
            <MenuIcon
              fontSize="large"
              color="black"
              onClick={handleDrawerToggle}
            />
          </IconButton>

          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box>
                <Typography
                  component="div"
                  sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                >
                  <Image
                    onClick={() => Router.push("/")}
                    src="/logo.svg"
                    alt="logo"
                    style={{ marginTop: 4 }}
                  />
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "40%",
                }}
              >
                {navItems.map((item, i) => (
                  <>
                    <Link
                      key={item.title}
                      className="nav-link"
                      href={`${item.link}`}
                    >
                      {item.title}
                    </Link>
                  </>
                ))}
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;
