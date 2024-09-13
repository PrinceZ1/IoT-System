import { Box, useTheme, Select, MenuItem, InputLabel, FormControl, TextField, Typography } from "@mui/material";
import { Header } from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataHistory } from "../../data/mockData";
import { tokens } from "../../theme";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

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
    pageSize: 5,
    page: 0,
  });

  const [filterValues, setFilterValues] = useState({
    device: '',
    active: '',
    time: '',
  });

  const filteredRows = mockDataHistory.filter(row =>
    (filterValues.device === '' || row.device.toLowerCase().includes(filterValues.device.toLowerCase())) &&
    (filterValues.active === '' || row.active.toString().includes(filterValues.active)) &&
    (filterValues.time === '' || row.time.includes(filterValues.time))
  );

  const pageCount = Math.ceil(filteredRows.length / paginationModel.pageSize);

  const handlePageChange = (newPage) => {
    setPaginationModel((prevModel) => ({
      ...prevModel,
      page: newPage,
    }));
  };

  const handlePageSizeChange = (event) => {
    setPaginationModel((prevModel) => ({
      ...prevModel,
      pageSize: parseInt(event.target.value, 10),
      page: 0,
    }));
  };

  const handleFilterChange = (field, value) => {
    setFilterValues(prevValues => ({
      ...prevValues,
      [field]: value,
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
          position: 'relative',
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
        {/* Filter Section */}
        <Box sx={{ mb: 2, display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <TextField
            label="Device"
            variant="outlined"
            size="small"
            value={filterValues.device}
            onChange={(e) => handleFilterChange('device', e.target.value)}
            sx={{
              minWidth: '150px',
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: colors.primary[200],
                },
                "&.Mui-focused fieldset": {
                  borderColor: colors.blueAccent[500],
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: colors.blueAccent[500],
              },
            }}
          />
          <TextField
            label="Active"
            variant="outlined"
            size="small"
            value={filterValues.active}
            onChange={(e) => handleFilterChange('active', e.target.value)}
            sx={{
              minWidth: '150px',
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: colors.primary[200],
                },
                "&.Mui-focused fieldset": {
                  borderColor: colors.blueAccent[500],
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: colors.blueAccent[500],
              },
            }}
          />
          <TextField
            label="Time"
            variant="outlined"
            size="small"
            value={filterValues.time}
            onChange={(e) => handleFilterChange('time', e.target.value)}
            sx={{
              minWidth: '150px',
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: colors.primary[200],
                },
                "&.Mui-focused fieldset": {
                  borderColor: colors.blueAccent[500],
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: colors.blueAccent[500],
              },
            }}
          />
        </Box>

        {/* Page Size and Pagination */}
        <Box sx={{ position: 'absolute', top: '-50px', right: '16px', display: 'flex', gap: '16px', zIndex: 1, alignItems: 'center' }}>
          <FormControl variant="outlined" size="small" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography sx={{ mr: 1, color: colors.primary[100] }}>Page Size</Typography>
            <Select
              id="page-size-select"
              value={paginationModel.pageSize}
              onChange={handlePageSizeChange}
              sx={{ minWidth: '70px' }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
          <Pagination
            color="standard"
            count={pageCount}
            page={paginationModel.page + 1}
            onChange={(event, value) => handlePageChange(value - 1)}
          />
        </Box>

        {/* DataGrid */}
        <DataGrid
          rows={filteredRows}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          hideFooter
        />
      </Box>
    </Box>
  );
};

export default History;
