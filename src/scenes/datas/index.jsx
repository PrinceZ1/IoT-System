import * as React from 'react';
import {
  DataGrid,
} from '@mui/x-data-grid';
import { Box, useTheme, Select, MenuItem, Typography, FormControl, TextField, InputLabel } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { Header } from "../../components";
import { mockDataDatas } from "../../data/mockData"; 
import { tokens } from "../../theme";

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
    pageSize: 5,
    page: 0,
  });

  const [filterValues, setFilterValues] = React.useState({
    temp: '',
    humidity: '',
    bright: '',
    time: '',
  });

  const filteredRows = mockDataDatas.filter(row =>
    (filterValues.temp === '' || row.temp.toString().includes(filterValues.temp)) &&
    (filterValues.humidity === '' || row.humidity.toString().includes(filterValues.humidity)) &&
    (filterValues.bright === '' || row.bright.toString().includes(filterValues.bright)) &&
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
      <Header title="Data Sensor" />
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
            label="Temperature"
            variant="outlined"
            size="small"
            value={filterValues.temp}
            onChange={(e) => handleFilterChange('temp', e.target.value)}
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
            label="Humidity"
            variant="outlined"
            size="small"
            value={filterValues.humidity}
            onChange={(e) => handleFilterChange('humidity', e.target.value)}
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
            label="Bright"
            variant="outlined"
            size="small"
            value={filterValues.bright}
            onChange={(e) => handleFilterChange('bright', e.target.value)}
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
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={50}>50</MenuItem>
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

export default Datas;
