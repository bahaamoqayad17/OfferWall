import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import SvgIcon from "@mui/material/SvgIcon";
import { Search } from "@mui/icons-material";
import DataTable from "@/components/GlobalComponents/DataTable";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "@/store/AppSlice";
import { useEffect } from "react";

const Page = () => {
  const { surveys, loading } = useSelector((state) => state.apps);
  const dispatch = useDispatch();
  const getPagination = (page, limit) => {
    page++;
    // dispatch(fetchSurveys({ page }));
  };

  const search = (e) => {
    const { value } = e.target;
    if (e.key === "Enter") {
      if (value) {
        dispatch(fetchSurveys({ country: value }));
      } else {
        dispatch(fetchSurveys());
      }
    }
  };

  useEffect(() => {
    dispatch(fetchSurveys());
  }, []);

  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | API Surveys`}</title>
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
                All API Surveys
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
                      placeholder="Search Surveys By Country Code"
                      variant="outlined"
                    />
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <InputLabel>Category Name</InputLabel>
                      <Select
                        native
                        name="status"
                        onChange={(e) => {
                          const { value } = e.target;
                          if (value === "all")
                            return dispatch(
                              fetchSurveys({ take: 10, skip: 0 })
                            );
                          dispatch(fetchSurveys({ categories: value }));
                        }}
                        label="Status"
                      >
                        <option value="all">All</option>
                        <option value="21">CPI</option>
                        <option value="22">CPE</option>
                        <option value="18">CPC</option>
                        <option value="23">CPA</option>
                      </Select>
                    </FormControl> */}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <DataTable
              getPagination={getPagination}
              count={surveys.length + 10000}
              items={surveys}
              loading={loading}
              model={"surveys"}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
