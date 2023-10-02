import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function App({ Component }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <Head>
        <title>{`${process.env.APP_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <CssBaseline />
          {getLayout(<Component />)}
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
}
