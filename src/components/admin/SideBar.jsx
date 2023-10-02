import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NavItem from "./NavItem";
import PeopleIcon from "@mui/icons-material/People";
import Apps from "@/icons/Apps";
import { Settings } from "@mui/icons-material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";

const items = [
  {
    href: "/admin/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard ",
  },
  {
    href: "/admin/users",
    icon: <PeopleIcon fontSize="small" />,
    title: "Publishers",
  },
  {
    href: "/admin/apps",
    icon: <Apps fontSize="small" />,
    title: "Apps",
  },
  {
    href: "/admin/apps/offers",
    icon: <LocalOfferIcon fontSize="small" />,
    title: "API Offers",
  },
  {
    href: "/admin/apps/surveys",
    icon: <LocalOfferIcon fontSize="small" />,
    title: "API Surveys",
  },
  {
    href: "/admin/settings",
    icon: <Settings fontSize="small" />,
    title: "Settings",
  },
  {
    href: "/admin/receipts",
    icon: <ReceiptIcon fontSize="small" />,
    title: "Receipts",
  },
  {
    href: "/admin/messages",
    icon: <MarkAsUnreadIcon fontSize="small" />,
    title: "Messages",
  },
];

export default function Sidebar(props) {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  }, [router.asPath]);

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{ p: 1 }}
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Box>
            <NextLink href="/" passHref>
              <img src="/logo.svg" alt="test" />
            </NextLink>
          </Box>
        </Box>
        <Divider
          sx={{
            borderColor: "#c2c2c2",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <NavItem items={items} />
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#f5f5f5",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
