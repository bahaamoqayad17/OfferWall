import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Dashboard from "../icons/Dashboard";
import Apps from "../icons/Apps";
import Campaigns from "../icons/Campaigns";
import Reports from "../icons/Reports";
import Billing from "../icons/Billing";
import Profile from "../icons/Profile";
import Documents from "../icons/Documents";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Manager from "@/icons/Manager";
import EmailDashboard from "@/icons/EmailDashboard";
import NavItem from "./admin/NavItem";

const drawerWidth = 280;

const Image = styled("img")({
  height: "100%",
});

const Details = styled("div")({
  backgroundColor: "#F9FAFB",
  borderRadius: "8px",
  padding: "8px 16px",
});

const Content = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  fontSize: "14px",
  marginBottom: "8px",
  color: "#1F2937",
});

function UserLayout(props) {
  const router = useRouter();
  const lang = "ar";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const topics = [
    {
      title: "Dashboard",
      icon: <Dashboard />,
      href: "/user",
    },
    {
      title: "Apps",
      icon: <Apps />,
      href: "/user/apps",
    },
    {
      title: "Campaigns",
      icon: <Campaigns />,
      href: "/user/campaigns",
    },
    {
      title: "Reports",
      icon: <Reports />,
      href: "/user/reports",
      subMenu: [
        {
          title: "Performance",
          href: "/user/reports/performance",
        },
        {
          title: "Revesal",
          href: "/user/reports/reversals  ",
        },
      ],
    },
    {
      title: "Billing",
      icon: <Billing />,
      href: "/user/billing",
    },
    {
      title: "Profile",
      icon: <Profile />,
      href: "/user/profile",
    },
    {
      title: "Documents",
      icon: <Documents />,
      href: "/user/documents",
      subMenu: [
        {
          title: "Postbacks",
          href: "/user/documents",
        },
        {
          title: "APIs",
          href: "/user/documents",
        },
      ],
    },
  ];

  const drawer = (
    <>
      <Box
        sx={{
          padding: "24px 16px",
        }}
      >
        <center>
          <Image src="/logo.svg" alt="" />
        </center>

        <Divider sx={{ my: 3, backgroundColor: "#E5E7EB" }} />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <NavItem items={topics} />
          </Box>
          <Details>
            <Content>
              <Manager /> &nbsp; Manager: Mohammed
            </Content>
            <Content>
              <EmailDashboard /> &nbsp; Email: example@gmail.com
            </Content>
            <Content>
              <img src="/Skype.svg" alt="" /> &nbsp; &nbsp;Skype
              live:767275282672
            </Content>
          </Details>
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mr: { sm: lang === "en" && `${drawerWidth}px` },
          ml: { sm: lang === "ar" && `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "#fff" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              py: "8px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, ml: 1, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Typography color="#414141" mr={2} fontSize={14}>
                Bahaa Moqayad
              </Typography>
              <Avatar />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            borderLeft: "1px solid #0000001f",
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflow: "hidden",
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

UserLayout.propTypes = {
  window: PropTypes.func,
};

export default UserLayout;
