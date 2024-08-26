import React from "react";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Header, StatBox, LineChart } from "../../components";
import {
  ArrowUpwardOutlined, 
  ArrowDownwardOutlined,
  WbSunnyOutlined,
  WaterDropOutlined,
  LightOutlined,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faWind, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { tokens } from "../../theme";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isXlDevices = useMediaQuery("(min-width: 1260px)");
  const isMdDevices = useMediaQuery("(min-width: 724px)");
  const isXsDevices = useMediaQuery("(max-width: 436px)");

  const [switchState, setSwitchState] = React.useState({
    fan: false,
    airConditioner: false,
    lightbulb: false,
  });

  const handleSwitchChange = (event) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Dashboard" />
        {!isXsDevices && <Box></Box>}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={
          isXlDevices
            ? "repeat(12, 1fr)"
            : isMdDevices
            ? "repeat(6, 1fr)"
            : "repeat(3, 1fr)"
        }
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Statistic Items */}
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="28℃"
            subtitle="Temperature"
            progress="0.75"
            increase="+14%"
            icon={
              <WbSunnyOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="70%"
            subtitle="Humidity"
            progress="0.70"
            increase="+21%"
            icon={
              <WaterDropOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="120 lux"
            subtitle="Bright"
            progress="0.30"
            increase="+5%"
            icon={
              <LightOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ---------------- Row 2 ---------------- */}

        {/* Line Chart */}
        <Box
          gridColumn={
            isXlDevices ? "span 8" : isMdDevices ? "span 6" : "span 3"
          }
          gridRow="span 2"
          bgcolor={colors.primary[400]}
        >
          <Box
            mt="25px"
            px="30px"
            display="flex"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Chart
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              ></Typography>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Control Panel */}
        <Box
          gridColumn={isXlDevices ? "span 4" : "span 3"}
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          overflow="auto"
          p="20px"
          borderRadius="8px"
        >
          <Typography variant="h4" fontWeight="600" mb="20px">
            Control
          </Typography>

          <Box display="flex" flexDirection="column" gap="16px">
            {/* Fan Control */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="10px"
              bgcolor={colors.primary[300]}
              borderRadius="8px"
            >
              <Typography variant="h6" fontWeight="600">
                Fan
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.fan}
                    onChange={handleSwitchChange}
                    name="fan"
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: colors.greenAccent[600],
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: colors.greenAccent[600],
                        },
                      "& .MuiSwitch-track": {
                        backgroundColor: colors.redAccent[500],
                      },
                    }}
                  />
                }
                label={
                  <Box display="flex" alignItems="center">
                    <FontAwesomeIcon
                      icon={faFan}
                      color={
                        switchState.fan
                          ? colors.greenAccent[600]
                          : colors.redAccent[600]
                      }
                      size="2x"
                    />
                    <Typography variant="body2" ml="8px">
                      {switchState.fan ? "On" : "Off"}
                    </Typography>
                  </Box>
                }
                labelPlacement="start"
              />
            </Box>

            {/* Air Conditioner Control */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="10px"
              bgcolor={colors.primary[300]}
              borderRadius="8px"
            >
              <Typography variant="h6" fontWeight="600">
                Air Conditioner
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.airConditioner}
                    onChange={handleSwitchChange}
                    name="airConditioner"
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: colors.greenAccent[600],
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: colors.greenAccent[600],
                        },
                      "& .MuiSwitch-track": {
                        backgroundColor: colors.redAccent[500],
                      },
                    }}
                  />
                }
                label={
                  <Box display="flex" alignItems="center">
                    <FontAwesomeIcon
                      icon={faWind}
                      color={
                        switchState.airConditioner
                          ? colors.greenAccent[600]
                          : colors.redAccent[600]
                      }
                      size="2x"
                    />
                    <Typography variant="body2" ml="8px">
                      {switchState.airConditioner ? "On" : "Off"}
                    </Typography>
                  </Box>
                }
                labelPlacement="start"
              />
            </Box>

            {/* Lightbulb Control */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="10px"
              bgcolor={colors.primary[300]}
              borderRadius="8px"
            >
              <Typography variant="h6" fontWeight="600">
                Lightbulb
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchState.lightbulb}
                    onChange={handleSwitchChange}
                    name="lightbulb"
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: colors.greenAccent[600],
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: colors.greenAccent[600],
                        },
                      "& .MuiSwitch-track": {
                        backgroundColor: colors.redAccent[500],
                      },
                    }}
                  />
                }
                label={
                  <Box display="flex" alignItems="center">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      color={
                        switchState.lightbulb
                          ? colors.greenAccent[600]
                          : colors.redAccent[600]
                      }
                      size="2x"
                    />
                    <Typography variant="body2" ml="8px">
                      {switchState.lightbulb ? "On" : "Off"}
                    </Typography>
                  </Box>
                }
                labelPlacement="start"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
