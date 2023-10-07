import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Email from "@/icons/Email";
import User from "@/icons/User";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Lock from "@/icons/Lock";
import Mail from "@/icons/Mail";
import { useDispatch } from "react-redux";
import { register } from "@/store/AuthSlice";
import { useEffect } from "react";
import axios from "axios";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessIcon from "@mui/icons-material/Business";
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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(register(item));
  };

  useEffect(() => {
    axios.get("https://geolocation-db.com/json/").then((res) => {
      setItem({
        ...item,
        country: res.data.country_name,
        register_ip: res.data.IPv4,
      });
    });
  }, []);

  return (
    <>
      <Box
        className="register"
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Image src="/register.svg" alt="test" />
        <Box sx={{ margin: "auto", width: { sm: "660px", xs: "360px" } }}>
          <Box textAlign={"center"} my={2}>
            <img
              onClick={() => Router.push("/")}
              style={{ cursor: "pointer" }}
              src="/logo.svg"
              alt="test"
            />
            <h1>Create new account</h1>
          </Box>
          <Card sx={{ padding: "24px", paddingTop: "8px" }}>
            <Box>
              <FormControl>
                <RadioGroup row name="company_type" onChange={handleChange}>
                  <FormControlLabel
                    value="Personal"
                    control={<Radio />}
                    label="Personal"
                  />
                  <FormControlLabel
                    value="Company"
                    control={<Radio />}
                    label="Company"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            {item?.company_type === "Company" && (
              <>
                <Box>
                  <Label>Company Name</Label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Company Name"
                    name="company_name"
                    onChange={handleChange}
                    value={item?.company_name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBalanceIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Label>Company Tax ID</Label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Company Tax ID"
                    name="company_id"
                    onChange={handleChange}
                    value={item?.company_id}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </>
            )}
            <Box>
              <Label>Full Name</Label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Full name"
                name="name"
                onChange={handleChange}
                value={item?.name}
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
              <Label>Website or App URL</Label>
              <TextField
                variant="outlined"
                fullWidth
                name="app_url"
                onChange={handleChange}
                value={item?.app_url}
                placeholder="Ex. https://www.Aramco.com"
              />
            </Box>

            <Box>
              <Label>Email</Label>
              <TextField
                variant="outlined"
                fullWidth
                name="email"
                type="email"
                onChange={handleChange}
                value={item?.email}
                placeholder="m.reyad.s@gmail.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* <Box>
              <Label>What’s your gender? (optional)</Label>
              <FormControl>
                <RadioGroup row name="gender" onChange={handleChange}>
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Box> */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box>
                <Label>Password</Label>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="*********"
                  name="password"
                  type={!showPassword ? "password" : "text"}
                  onChange={handleChange}
                  value={item?.password}
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
              &nbsp;&nbsp;&nbsp;
              <Box>
                <Label>Confirm Password</Label>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="*********"
                  name="passwordConfirm"
                  type={!showPassword ? "password" : "text"}
                  onChange={handleChange}
                  value={item?.passwordConfirm}
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
            </Box>

            <Box>
              <Label>Skype ID</Label>
              <TextField
                variant="outlined"
                fullWidth
                name="skype_id"
                placeholder="email@you.com"
                onChange={handleChange}
                value={item?.skype_id}
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
              <Label>Phone Number</Label>
              <PhoneInput
                autoFormat={false}
                placeholder="Enter phone number"
                value={item?.mobile_number}
                enableSearchField
                enableSearch
                onChange={(v) =>
                  handleChange({
                    target: { name: "mobile_number", value: `+${v}` },
                  })
                }
                inputProps={{
                  required: true,
                  autoFocus: false,
                }}
                specialLabel="Phone"
                country={"ps"}
                searchStyle={{ margin: "0", width: "95%", height: "50px" }}
                inputStyle={{
                  width: "100%",
                  height: "56px",
                }}
                dropdownStyle={{ height: "200px", width: "267px" }}
              />
            </Box>

            <Box>
              <Label>Fraud Prevention</Label>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                value={item?.cover_letter}
                onChange={handleChange}
                name="cover_letter"
                rows={item?.company_type === "Company" ? 2.3 : 4}
              />
            </Box>
            <Button
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Register;
