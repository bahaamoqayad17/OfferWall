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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import PerfectScrollbar from "react-perfect-scrollbar";
import { resources } from "@/lib/resources";
import Select from "@mui/material/Select";
import SvgIcon from "@mui/material/SvgIcon";
import { Search } from "@mui/icons-material";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffers } from "@/store/AppSlice";
import { useEffect } from "react";

const Page = () => {
  const { offers, loading } = useSelector((state) => state.apps);
  const dispatch = useDispatch();
  const getPagination = (page, limit) => {
    page++;
    // dispatch(fetchOffers({ take: limit, skip: page }));
  };

  const search = (e) => {
    const { value } = e.target;
    if (e.key === "Enter") {
      if (value) {
        dispatch(fetchOffers({ countries: value }));
      } else {
        dispatch(fetchOffers());
      }
    }
  };

  //   useEffect(() => {
  //     dispatch(fetchOffers());
  //   }, []);

  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | API Offers`}</title>
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
                All API Offers
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
                      placeholder="Search Offers By Country Code"
                      variant="outlined"
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <InputLabel>Category Name</InputLabel>
                      <Select
                        native
                        name="status"
                        onChange={(event) => {
                          const { value, dataset } = event.target;
                          if (value === "all") return dispatch(fetchOffers());
                          dispatch(
                            fetchOffers({
                              categories: value,
                              payout_type:
                                event.target[
                                  event.target.selectedIndex
                                ].getAttribute("data-name"),
                            })
                          );
                        }}
                        label="Status"
                      >
                        <option value="all" data-name="all">
                          All
                        </option>
                        <option value="21" data-name="cpi">
                          CPI
                        </option>
                        <option value="22" data-name="cpe">
                          CPE
                        </option>
                        <option value="18" data-name="cpc">
                          CPC
                        </option>
                        <option value="23" data-name="cpa">
                          CPA
                        </option>
                      </Select>
                    </FormControl>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              <PerfectScrollbar>
                <Box sx={{ overflowX: "auto", maxWidth: "100%" }}>
                  <Table>
                    <TableHead
                      sx={{
                        backgroundColor: "#0079FF",
                      }}
                    >
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Requirments</TableCell>
                        <TableCell>Payout</TableCell>
                      </TableRow>
                    </TableHead>
                    {loading ? (
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={20} align="center">
                            <CircularProgress />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ) : (
                      <TableBody>
                        {offers?.map((item) => (
                          <TableRow hover key={item.id}>
                            <TableCell color="textPrimary" variant="body1">
                              {item?.creatives?.icon ? (
                                <img
                                  src={item?.creatives?.icon}
                                  alt="Image"
                                  width={"60"}
                                  height={"60"}
                                />
                              ) : (
                                <img
                                  src={item?.image_url}
                                  alt="Image"
                                  width={"60"}
                                  height={"60"}
                                />
                              )}
                            </TableCell>
                            <TableCell color="textPrimary" variant="body1">
                              {item?.name ? item?.name : item?.offer_name}
                            </TableCell>
                            <TableCell color="textPrimary" variant="body1">
                              {item?.requirements
                                ? item?.requirements
                                : item?.offer_desc}
                            </TableCell>
                            <TableCell color="textPrimary" variant="body1">
                              {item?.epc ? item?.epc : item?.payout}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    )}
                  </Table>
                </Box>
              </PerfectScrollbar>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
