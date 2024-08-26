import * as React from 'react';
import {
  DataGrid,
} from '@mui/x-data-grid';
import { Box, useTheme } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { Header } from "../../components";
import { mockDataDatas } from "../../data/mockData"; // Sử dụng dữ liệu mock
import { tokens } from "../../theme";

// Custom Toolbar component for pagination
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

const Datas = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "temp", headerName: "Temperature", flex: 1 },
    { field: "humidity", headerName: "Humidity", flex: 1 },
    { field: "bright", headerName: "Bright", flex: 1 },
    { field: "time", headerName: "Time", flex: 1 },
  ];

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 1, // Số lượng hàng trên mỗi trang
    page: 0,     // Trang hiện tại
  });

  const pageCount = Math.ceil(mockDataDatas.length / paginationModel.pageSize); // Tính tổng số trang

  const handlePageChange = (newPage) => {
    setPaginationModel((prevModel) => ({
      ...prevModel,
      page: newPage,
    }));
  };

  return (
    <Box m="20px">
      <Header title="Data Sensor" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataDatas}
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

export default Datas;
