import { tokens } from "../theme";


export const mockDataDatas = [
  {
    id: 1,
    temp: "28℃",
    humidity: "60%",
    bright: "34 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 2,
    temp: "30℃",
    humidity: "70%",
    bright: "56 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 3,
    temp: "23℃",
    humidity: "80%",
    bright: "90 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 4,
    temp: "22℃",
    humidity: "69%",
    bright: "56 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 5,
    temp: "28℃",
    humidity: "50%",
    bright: "90 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 6,
    temp: "35℃",
    humidity: "70%",
    bright: "78 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 7,
    temp: "21℃",
    humidity: "60%",
    bright: "54 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 8,
    temp: "34℃",
    humidity: "60%",
    bright: "78 Lux",
    time: "21:23 28/08/2024"
  },
  {
    id: 9,
    temp: "25℃",
    humidity: "40%",
    bright: "90 Lux",
    time: "21:23 28/08/2024"
  }
];

export const mockDataHistory = [
  {
    id: 1,
    device: "Fan",
    active: "ON",
    time: "21:23 28/08/2024"
  },
  {
    id: 2,
    device: "Lightbulb",
    active: "OFF",
    time: "21:23 28/08/2024"
  },
  {
    id: 3,
    device: "Fan",
    active: "ON",
    time: "5:25 29/08/2024"
  },
  {
    id: 4,
    device: "Air Conditioner",
    active: "OFF",
    time: "19:23 30/08/2024"
  },
  {
    id: 5,
    device: "Fan",
    active: "OFF",
    time: "15:23 28/08/2024"
  },
  {
    id: 6,
    device: "Lightbulb",
    active: "ON",
    time: "12:23 27/08/2024"
  },
  {
    id: 7,
    device: "Fan",
    active: "ON",
    time: "21:23 28/08/2024"
  },
  {
    id: 8,
    device: "Air Conditioner",
    active: "ON",
    time: "22:23 28/08/2024"
  },
  {
    id: 9,
    device: "Fan",
    active: "ON",
    time: "18:23 30/08/2024"
  }
];

export const mockLineData = [
  {
    id: "Bright",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "21:00",
        y: 34,
      },
      {
        x: "21:01",
        y: 55,
      },
      {
        x: "21:02",
        y: 69,
      },
      {
        x: "21:03",
        y: 23,
      },
      {
        x: "21:04",
        y: 35,
      },
      {
        x: "21:05",
        y: 23,
      },
      {
        x: "21:06",
        y: 65,
      },
      {
        x: "21:07",
        y: 32,
      },
      {
        x: "21:08",
        y: 81,
      },
      {
        x: "21:09",
        y: 13,
      },
      {
        x: "21:10",
        y: 2,
      },
    ],
  },
  {
    id: "Humidity",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "21:00",
        y: 60,
      },
      {
        x: "21:01",
        y: 87,
      },
      {
        x: "21:02",
        y: 90,
      },
      {
        x: "21:03",
        y: 69,
      },
      {
        x: "21:04",
        y: 75,
      },
      {
        x: "21:05",
        y: 46,
      },
      {
        x: "21:06",
        y: 33,
      },
      {
        x: "21:07",
        y: 57,
      },
      {
        x: "21:08",
        y: 68,
      },
      {
        x: "21:09",
        y: 87,
      },
      {
        x: "21:10",
        y: 80,
      },
    ],
  },
  {
    id: "Temperature",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "21:00",
        y: 28,
      },
      {
        x: "21:01",
        y: 29,
      },
      {
        x: "21:02",
        y: 30,
      },
      {
        x: "21:03",
        y: 31,
      },
      {
        x: "21:04",
        y: 32,
      },
      {
        x: "21:05",
        y: 27,
      },
      {
        x: "21:06",
        y: 30,
      },
      {
        x: "21:07",
        y: 26,
      },
      {
        x: "21:08",
        y: 34,
      },
      {
        x: "21:09",
        y: 25,
      },
      {
        x: "21:10",
        y: 27,
      },
    ],
  },
];

