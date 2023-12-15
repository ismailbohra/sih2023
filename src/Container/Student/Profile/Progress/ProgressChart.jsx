import React from "react";
import { Chart } from "react-google-charts";

export default (props) => {
  const data = props.data || [
    ["Questions", "Time"],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 25],
    [4, 30],
  ];

  const options = {
    curveType: "function",
    legend: { position: "none" },
    vAxis: {
      title: "Time",
      titleTextStyle: {
        fontSize: 14,

        italic: false,
      },
      minValue: 0,
      maxValue: 90,
      ticks: [20, 40, 60, 80, 100],
      gridlines: {
        color: "transparent",
      },
    },

    hAxis: {
      title: "Question",
      titleTextStyle: {
        fontSize: 14,
      },
      ticks: [0, 1, 2, 3, 4, 5],
      gridlines: {
        color: "transparent",
      },
    },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
};
