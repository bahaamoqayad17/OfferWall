import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function NavItem(props) {
  const { t } = useTranslation();
  const router = useRouter();
  const [itemsState, setItemsState] = useState({});

  const style = {
    borderRadius: 1,
    justifyContent: "flex-start",
    textAlign: "left",
    textTransform: "none",
    width: "100%",
  };

  const handleItemsClick = (key) => {
    let holder = itemsState;
    holder[key] = !holder[key];
    setItemsState({ ...holder });
  };
  const nestedChildren = (item, item_key) => {
    if (item == null) return;
    if (item.subMenu) {
      return (
        <div key={item_key}>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#0079FF",
                "& span": {
                  color: "#fff",
                },
                "& svg": {
                  fill: "#fff",
                },
                "& path": {
                  fill: "#fff",
                },
              },
            }}
            onClick={() => handleItemsClick(item_key)}
          >
            <ListItemIcon
              sx={{
                color: router.pathname === item.href ? "#10B981" : "#D1D5DB",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={{ color: "#1F2937" }} primary={t(item.title)} />
            {itemsState[item_key] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={itemsState[item_key]} timeout="auto" unmountOnExit>
            <List sx={{ pl: 1 }} component="div" disablePadding>
              {item.subMenu.map((item, index) =>
                nestedChildren(item, `${index}_${t(item.title)}`)
              )}
            </List>
          </Collapse>
        </div>
      );
    } else {
      return (
        <NextLink
          href={item.href}
          style={{
            width: "100%",
            textDecoration: "none",
          }}
        >
          <ListItemButton
            style={{
              backgroundColor: router.pathname == item.href ? "#0079FF" : "",
              color: router.pathname == item.href ? "#fff" : "#414141",
            }}
            sx={{
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#0079FF",
                "& span": {
                  color: "#fff",
                },
                "& svg": {
                  fill: "#fff",
                },
                "& path": {
                  fill: "#fff",
                },
              },

              "& svg": {
                fill: router.pathname == item.href ? "#fff" : "#414141",
              },

              "& path": {
                fill: router.pathname == item.href ? "#fff" : "#414141",
              },

              "& span": {
                color: router.pathname == item.href ? "#fff" : "#414141",
              },
              ...(item.title === "Dashboard" && {
                "& path": {
                  fill: "none",
                },
              }),
            }}
            key={item_key}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={t(item.title)} />
          </ListItemButton>
        </NextLink>
      );
    }
  };
  return (
    <List sx={style} component="nav" aria-labelledby="nested-list-subheader">
      {props.items?.map((item, index) =>
        nestedChildren(item, `${index}_${t(item.title)}`)
      )}
    </List>
  );
}
