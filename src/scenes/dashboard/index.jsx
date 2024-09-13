import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Header, LineChart } from "../../components";
import {
  WbSunnyOutlined,
  WaterDropOutlined,
  LightOutlined,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan, faWind, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { tokens } from "../../theme";

const spinAnimation = `
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

const acBlowAnimation = `
@keyframes blowWind {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
`;

const blinkAnimation = `
@keyframes blinkLightbulb {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `${spinAnimation}${acBlowAnimation}${blinkAnimation}`;
document.head.appendChild(styleSheet);

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
          sx={{
            background: "linear-gradient(to right, #ff7f7f, #ff4d4d)",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h3" fontWeight="bold" color={colors.gray[800]}>
              28℃
            </Typography>
            <Typography variant="subtitle1" color={colors.gray[700]}>
              Temperature
            </Typography>
          </Box>
          <WbSunnyOutlined
            sx={{
              color: "#FFD700", 
              fontSize: "40px",
              marginLeft: "16px",
            }}
          />
        </Box>

        <Box
          gridColumn="span 3"
          sx={{
            background: "linear-gradient(to right, #42a5f5, #1e88e5)",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h3" fontWeight="bold" color={colors.gray[800]}>
              70%
            </Typography>
            <Typography variant="subtitle1" color={colors.gray[700]}>
              Humidity
            </Typography>
          </Box>
          <WaterDropOutlined
            sx={{
              color: "#E0F7FA",
              fontSize: "40px",
              marginLeft: "16px",
            }}
          />
        </Box>

        <Box
          gridColumn="span 3"
          sx={{
            background: `linear-gradient(to right, ${colors.gray[100]}, ${colors.gray[300]})`,
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h3" fontWeight="bold" color={colors.gray[800]}>
              120 lux
            </Typography>
            <Typography variant="subtitle1" color={colors.gray[700]}>
              Bright
            </Typography>
          </Box>
          <LightOutlined
            sx={{
              color: "#FF7043", 
              fontSize: "40px",
              marginLeft: "16px",
            }}
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
              p="16px"
              bgcolor={colors.primary[400]}
              borderRadius="12px"
              boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
            >
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.textPrimary}
              >
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
                      style={{
                        animation: switchState.fan
                          ? "spin 2s linear infinite"
                          : "none",
                      }}
                    />
                    <Typography
                      variant="body2"
                      ml="12px"
                      color={colors.textSecondary}
                    >
                      {switchState.fan ? "ON" : "OFF"}
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
              p="16px"
              bgcolor={colors.primary[400]}
              borderRadius="12px"
              boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
            >
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.textPrimary}
              >
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
                      style={{
                        animation: switchState.airConditioner
                          ? "blowWind 1.5s ease-in-out infinite"
                          : "none",
                      }}
                    />
                    <Typography
                      variant="body2"
                      ml="12px"
                      color={colors.textSecondary}
                    >
                      {switchState.airConditioner ? "ON" : "OFF"}
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
              p="16px"
              bgcolor={colors.primary[400]}
              borderRadius="12px"
              boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
            >
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.textPrimary}
              >
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
                      style={{
                        animation: switchState.lightbulb
                          ? "blinkLightbulb 1s infinite"
                          : "none",
                      }}
                    />
                    <Typography
                      variant="body2"
                      ml="12px"
                      color={colors.textSecondary}
                    >
                      {switchState.lightbulb ? "ON" : "OFF"}
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
