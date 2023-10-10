import DashboardLayout from "@/components/admin/DashboardLayout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Conatiner from "@mui/material/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { fetchSetting, updateSettings } from "@/store/SettingSlice";
import Button from "@mui/material/Button";

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
  const { loading } = useSelector((state) => state.settings);
  const [item, setItem] = useState({});
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setImage(URL.createObjectURL(files[0]));
      setItem({ ...item, [name]: files[0] });
      return;
    }

    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(updateSettings(item));
  };

  useEffect(() => {
    dispatch(fetchSetting(id)).then((res) => {
      setItem(res.payload.data);
      setImage(res.payload.data.image);
    });
  }, [id]);
  return (
    <>
      {!loading && (
        <>
          <section>
            <Box>
              <Conatiner>
                <Title style={{ fontSize: 50 }}>Website Settings</Title>
                <Holder>
                  <Title>Meta Description</Title>
                  <TextField
                    variant="outlined"
                    value={item.meta_description}
                    name="meta_description"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleChange}
                  />
                </Holder>

                <Holder>
                  <Title>Meta Keywords</Title>

                  <TextField
                    variant="outlined"
                    value={item.meta_keywords}
                    name="meta_keywords"
                    onChange={handleChange}
                    fullWidth
                  />
                </Holder>

                <Holder>
                  <Title>Meta Title</Title>

                  <TextField
                    variant="outlined"
                    value={item.meta_title}
                    name="meta_title"
                    onChange={handleChange}
                    fullWidth
                  />
                </Holder>

                <Holder>
                  <Title>Logo</Title>

                  <input type="file" name="image" onChange={handleChange} />
                  <br />
                  {image && <img src={image} alt="logo" width="100px" />}
                </Holder>

                <Button variant="contained" onClick={handleSubmit}>
                  Save
                </Button>
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
