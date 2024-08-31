/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Khởi tạo state cho dữ liệu
  const [data, setData] = useState([
    { id: "temperature", data: [] },
    { id: "humidity", data: [] },
    { id: "brightness", data: [] },
  ]);

  // Cập nhật dữ liệu mỗi giây
  useEffect(() => {
    const interval = setInterval(() => {
      const newTemperature = generateRandomDataPoint();
      const newHumidity = generateRandomDataPoint();
      const newBrightness = generateRandomDataPoint();

      setData((prevData) => [
        {
          id: "temperature",
          data: [
            ...prevData[0].data,
            { x: new Date().toLocaleTimeString(), y: newTemperature },
          ].slice(-5), // Giữ lại 5 điểm dữ liệu cuối cùng
        },
        {
          id: "humidity",
          data: [
            ...prevData[1].data,
            { x: new Date().toLocaleTimeString(), y: newHumidity },
          ].slice(-5), // Giữ lại 5 điểm dữ liệu cuối cùng
        },
        {
          id: "brightness",
          data: [
            ...prevData[2].data,
            { x: new Date().toLocaleTimeString(), y: newBrightness },
          ].slice(-5), // Giữ lại 5 điểm dữ liệu cuối cùng
        },
      ]);
    }, 1500); // Cập nhật mỗi giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  // Hàm tạo dữ liệu ngẫu nhiên từ 0 đến 100
  const generateRandomDataPoint = () => Math.floor(Math.random() * 101);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.gray[100],
            },
          },
          legend: {
            text: {
              fill: colors.gray[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.gray[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.gray[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.gray[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={({ id }) => {
        switch (id) {
          case "temperature":
            return "#FF6F61"; // Màu đỏ cam cho Temperature
          case "humidity":
            return "#1E88E5"; // Màu xanh dương cho Humidity
          case "brightness":
            return "#FFEB3B"; // Màu vàng sáng cho Brightness
          default:
            return colors.gray[500];
        }
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "100",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Time",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Values",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
