import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataHistory } from "../../data/mockData";
import { tokens } from "../../theme";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

function Toolbar({ page, pageCount, onPageChange }) {
  return (
    <Pagination
      sx={(theme) => ({ padding: theme.spacing(1.5, 0) })}
      color="standard"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => onPageChange(value - 1)}
    />
  );
}

const History = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "device", headerName: "Devices", flex: 1 },
    { field: "active", headerName: "Active", flex: 1 },
    { field: "time", headerName: "Time", flex: 1 },
  ];

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 1, // Số lượng hàng mỗi trang
    page: 0, // Trang hiện tại
  });

  const pageCount = Math.ceil(
    mockDataHistory.length / paginationModel.pageSize
  ); // Tính tổng số trang

  const handlePageChange = (newPage) => {
    setPaginationModel((prevModel) => ({
      ...prevModel,
      page: newPage,
    }));
  };

  return (
    <Box m="20px">
      <Header title="Active History" />
      <Box
        mt="40px"
        height="75vh"
        maxWidth="100%"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { border: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-iconSeparator": {
            color: colors.primary[100],
          },
        }}
      >
        <DataGrid
          rows={mockDataHistory}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          hideFooter
          slots={{
            toolbar: () => (
              <Toolbar
                page={paginationModel.page}
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            ),
          }}
          // checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default History;
