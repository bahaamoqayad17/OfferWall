import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import DynamicModal from "@/components/GlobalComponents/DynamicModal";
import DataTable from "@/components/GlobalComponents/DataTable";
import { Search } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/UserSlice";

const Page = () => {
  const { t } = useTranslation();
  const { users, loading, count } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const getPagination = (page, limit) => {
    page++;
    dispatch(fetchUsers({ page, limit }));
  };
  const [openModal, setOpenModal] = useState(false);

  const search = (e) => {
    const { value } = e.target;
    if (e.key === "Enter") {
      if (value) {
        dispatch(fetchUsers({ search: value }));
      } else {
        dispatch(fetchUsers());
      }
    }
  };

  const handleOpenModel = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | Publishers`}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mb: 5,
              }}
            >
              <Typography sx={{ m: 1 }} variant="h3">
                All Publishers
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardContent>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    flexDirection={{ xs: "column", md: "row" }}
                  >
                    <TextField
                      onKeyPress={(e) => search(e)}
                      fullWidth
                      sx={{ my: 1 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SvgIcon color="action" fontSize="small">
                              <Search />
                            </SvgIcon>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Search Publishers"
                      variant="outlined"
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <InputLabel>Status</InputLabel>
                      <Select
                        native
                        name="status"
                        onChange={(e) => {
                          const { value } = e.target;
                          if (value === "all") return dispatch(fetchUsers());
                          dispatch(fetchUsers({ status: value }));
                        }}
                        label="Status"
                      >
                        <option value="all">All</option>
                        <option value="0">Pending</option>
                        <option value="1">Approved</option>
                        <option value="2">Rejected</option>
                        <option value="2">Suspend</option>
                      </Select>
                    </FormControl>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <DataTable
              getPagination={getPagination}
              count={count}
              items={users}
              loading={loading}
              model={"users"}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
