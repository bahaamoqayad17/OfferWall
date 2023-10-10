import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DataTable from "@/components/GlobalComponents/DataTable";
import { useTranslation } from "react-i18next";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "@/store/MessageSlice";

const Page = () => {
  const { t } = useTranslation();
  const { messages, loading, count } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const getPagination = (page, limit) => {
    page++;
    dispatch(fetchMessages({ page, limit }));
  };
  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | Messages`}</title>
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
                All Messages
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <DataTable
              getPagination={getPagination}
              count={count}
              items={messages}
              loading={loading}
              model={"messages"}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
