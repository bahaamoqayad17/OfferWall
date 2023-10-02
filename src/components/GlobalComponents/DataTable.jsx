import { useEffect } from "react";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useTranslation } from "react-i18next";
import { resources } from "@/lib/resources";
import DynamicMenu from "./DynamicMenu";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";

export default function DataTable({
  items,
  getPagination,
  count,
  model,
  loading,
}) {
  const { t } = useTranslation();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const router = useRouter();

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  useEffect(() => {
    getPagination(page, limit);
  }, [page, limit]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const getFieldValue = (object, field) => {
    const fieldPath = field.split(".");
    let value = object;
    for (let path of fieldPath) {
      value = value[path];
      if (value === undefined) break;
    }

    if (typeof value === "string" && value.startsWith("https")) {
      return <img src={value} alt="Image" width={"60"} height={"60"} />;
    }

    if (model === "apps" && field === "type") {
      if (value == 0) return "Survey";
      if (value == 1) return "Offer";
      if (value == 2) return "Survey & Offer";
    }

    if (field === "status") {
      if (value == 0) return "Pending";
      if (value == 1) return "Approved";
      if (value == 2) return "Rejected";
      if (value == 3) return "Suspended";
    }

    return value;
  };

  return (
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
                {resources[model]?.headers?.map((header, i, headersArray) => (
                  <>
                    <TableCell key={header}>{t(header)}</TableCell>
                    {router.pathname.startsWith("/user") ? (
                      <>
                        {i !== headersArray.length - 1 && (
                          <TableCell>|</TableCell>
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ))}
                {router.pathname.startsWith("/user") ||
                model === "messages" ||
                model === "offers_admin" ||
                model === "surveys" ? (
                  ""
                ) : (
                  <>
                    <TableCell>Actions</TableCell>
                  </>
                )}
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
                {items?.map((item) => (
                  <TableRow hover key={item._id}>
                    {resources[model]?.fields?.map((field) => (
                      <TableCell
                        key={field}
                        color="textPrimary"
                        variant="body1"
                      >
                        {getFieldValue(item, field)}
                      </TableCell>
                    ))}

                    {router.pathname.startsWith("/user") ||
                    model === "messages" ||
                    model === "offers_admin" ||
                    model === "surveys" ? (
                      ""
                    ) : (
                      <TableCell>
                        <DynamicMenu model={model} item={item} />
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
