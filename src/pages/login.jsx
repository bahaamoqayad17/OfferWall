import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import styled from "@emotion/styled";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Lock from "@/icons/Lock";
import Mail from "@/icons/Mail";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "@/store/AuthSlice";
import Router from "next/router";

const Label = styled("p")(({ theme }) => ({
  color: "#1F2937",
  fontSize: 16,
  fontWeight: 500,
  textAlign: "left",
  marginBottom: 8,
  marginTop: 16,
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.sm]: {
    width: "100%",
  },
}));

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("https://geolocation-db.com/json/").then((res) => {
      setItem({
        ...item,
        last_login_ip: res.data.IPv4,
      });
    });
  }, []);

  const handleSubmit = (e) => {
    dispatch(login(item));
  };

  return (
    <>
      <Box display={"flex"} flexDirection={{ xs: "column", lg: "row" }}>
        <Image src="/login-page.svg" alt="test" />
        <Box sx={{ margin: "auto", width: { sm: "660px", xs: "360px" } }}>
          <Box textAlign={"center"} my={2}>
            <img
              onClick={() => Router.push("/")}
              style={{ cursor: "pointer" }}
              src="/logo.svg"
              alt="test"
            />
            <Typography fontWeight={600} color={"#000"} my={6} fontSize={33}>
              Login
            </Typography>
          </Box>
          <Card sx={{ padding: "24px" }}>
            <h1>Welcome back!</h1>
            <Typography>Let’s build someting great today</Typography>

            <Box>
              <Label>Email Address</Label>
              <TextField
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                onChange={handleChange}
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
              <Label>Password</Label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="*********"
                type={!showPassword ? "password" : "text"}
                name="password"
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ cursor: "pointer" }}
                      position="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <RemoveRedEyeIcon />
                      )}
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Link href="/">
              <Typography textAlign={"right"}>Forget Your Passowrd</Typography>
            </Link>

            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </FormGroup>

            <Button
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Log me in
            </Button>

            <Link href="/register">
              <Typography fontSize={23} my={5} textAlign={"center"}>
                Don’t have an account?
              </Typography>
            </Link>

            <Link href="/register">
              <Typography textAlign={"center"}>Create new one now</Typography>
            </Link>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Login;
