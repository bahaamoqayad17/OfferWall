import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddApp from "@/icons/AddApp";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";

const Title = styled("p")(({ theme }) => ({
  fontSize: 24,
  color: "#6B6B6B",
  fontWeight: 600,
  marginBottom: 10,
}));

const Label = styled("div")(({ theme }) => ({
  fontSize: 18,
  color: "#374151",
  fontWeight: 600,
  width: 180,
}));

const Input = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 8,
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewApp() {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(item).then((res) => {
      setOpen(false);
    });
  };

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <center>
        <Button
          sx={{
            height: 36,
            width: 270,
            borderRadius: "4px",
            fontSize: 16,
            fontWeight: 700,
            marginBottom: "8px",
          }}
          onClick={handleClickOpen}
          variant="contained"
        >
          <AddApp color="" /> &nbsp; &nbsp; Add New App
        </Button>
      </center>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box width={500} sx={{ padding: "16px" }}>
          <Title>Add Application</Title>
          <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.10)", mb: 3 }} />

          <Input>
            <Label>Platform</Label>
            <TextField
              variant="outlined"
              fullWidth
              onChange={handleChange}
              sx={{ width: 250 }}
              placeholder="m.reyad.s@gmail.com"
            />
          </Input>

          <Input>
            <Label>App Name</Label>
            <TextField
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="name"
              value={item?.name}
              sx={{ width: 250 }}
              placeholder="App Name"
            />
          </Input>

          <Input>
            <Label>App URL</Label>
            <TextField
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="url"
              value={item?.url}
              sx={{ width: 250 }}
              placeholder="App URL"
            />
          </Input>

          <Input>
            <Label>Description</Label>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              onChange={handleChange}
              name="description"
              value={item?.description}
              rows={2}
              sx={{ width: 250 }}
              placeholder="Rich Text Editors allow you to format text in a variety of ways"
            />
          </Input>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Button
              sx={{ width: 215, borderRadius: "4px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#CCE4FF",
                width: 215,
                borderRadius: "4px",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
