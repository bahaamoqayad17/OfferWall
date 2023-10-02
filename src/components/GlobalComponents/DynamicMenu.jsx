import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Edit as EditIcon } from "../../icons/edit";
import { Delete as DeleteIcon } from "../../icons/delete";
import { Show as ShowIcon } from "../../icons/show";
import { EditPen as EditPenIcon } from "../../icons/editPen";
import DynamicModal from "./DynamicModal";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
import { updateUser } from "@/store/UserSlice";
import { useDispatch } from "react-redux";
import Router from "next/router";

export default function DynamicMenu({ item, model }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenModal(false);
  };

  const handleOpenMenu = () => {
    setOpenModal(true);
  };

  const handleDelete = () => {
    if (window.confirm(t("delete_this"))) {
      // removeOne(item);
    } else {
      return;
    }
  };

  const handleUserStatus = (status) => {
    if (window.confirm("Are You Sure ?")) {
      dispatch(updateUser({ ...item, status }));
    } else {
      return;
    }
  };

  return (
    <>
      <DynamicModal
        item={item}
        setOpenModal={setOpenModal}
        open={openModal}
        model={model}
      />
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickMenu}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleOpenMenu}>
          <EditPenIcon fontSize="small" />
          &nbsp; Edit
        </MenuItem>
        <MenuItem onClick={() => Router.push(`${model}/${item._id}`)}>
          <ShowIcon fontSize="small" />
          &nbsp; Show
        </MenuItem>
        {/* <MenuItem onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          &nbsp; Delete
        </MenuItem> */}

        {model === "users" && (
          <>
            <MenuItem onClick={() => handleUserStatus(1)}>
              <CheckCircleOutlineIcon fontSize="small" />
              &nbsp; Approve
            </MenuItem>
            <MenuItem onClick={() => handleUserStatus(2)}>
              <HighlightOffIcon fontSize="small" />
              &nbsp; Reject
            </MenuItem>
            <MenuItem onClick={() => handleUserStatus(3)}>
              <RemoveCircleIcon fontSize="small" />
              &nbsp; Suspend
            </MenuItem>
            <MenuItem onClick={() => handleUserStatus(1)}>
              <SwitchAccessShortcutAddIcon fontSize="small" />
              &nbsp; Reactivate
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}
