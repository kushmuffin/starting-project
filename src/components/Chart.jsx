// src/components/Chart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => `Year ${entry.year}`),
    datasets: [
      {
        label: 'Investment Value',
        data: data.map((entry) => entry.valueEndOfYear),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'Total Interest',
        data: data.map((entry) => entry.totalInterest),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      Hi
    </div>
  );
};

export default Chart;
