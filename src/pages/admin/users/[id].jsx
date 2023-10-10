import DashboardLayout from "@/components/admin/DashboardLayout";
import { fetchUser } from "@/store/UserSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Conatiner from "@mui/material/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

const Holder = styled("div")(({ theme }) => ({
  marginBottom: "20px",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Title = styled("h1")(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
}));

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading } = useSelector((state) => state.users);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id)).then((res) => {
      setItem(res.payload.data);
    });
  }, [id]);
  return (
    <>
      {!loading && (
        <>
          <section>
            <Box>
              <Conatiner>
                <Title style={{ fontSize: 50 }}>User Details</Title>

                <Holder>
                  <Title>Name</Title>
                  <TextField variant="outlined" value={item.name} fullWidth />
                </Holder>

                <Holder>
                  <Title>Email</Title>

                  <TextField variant="outlined" value={item.email} fullWidth />
                </Holder>

                <Holder>
                  <Title>Phone</Title>

                  <TextField
                    variant="outlined"
                    value={item.mobile_number}
                    fullWidth
                  />
                </Holder>

                <Holder>
                  <Title>App URL</Title>

                  <TextField
                    variant="outlined"
                    value={item.app_url}
                    fullWidth
                  />
                </Holder>

                <Holder>
                  <Title>Fraud Prevention</Title>

                  <TextField
                    variant="outlined"
                    value={item.cover_letter}
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Holder>

                <Holder>
                  <Title>Register IP</Title>

                  <TextField
                    variant="outlined"
                    value={item.register_ip}
                    fullWidth
                  />
                </Holder>

                <Holder>
                  <Title>Skype ID</Title>

                  <TextField
                    variant="outlined"
                    value={item.skype_id}
                    fullWidth
                  />
                </Holder>
              </Conatiner>
            </Box>
          </section>
        </>
      )}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
