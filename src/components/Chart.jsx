import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// 引入 Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data = [], comparisonData = [] }) => {
  const chartData = {
    labels: data.map((entry) => `Year ${entry.year}`),
    datasets: [
      {
        label: "Your investment Value",
        data: data.map((entry) => entry.valueEndOfYear),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
      {
        label: "Others investment Value",
        data: comparisonData.map((entry) => entry.valueEndOfYear),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: false,
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={chartData} />
      <br />
      <p className="center">
        Life is like a snowball, all you need is wet snow and a really long
        hill. -- Warren Buffett
      </p>
    </div>
  );
};

export default Chart;
