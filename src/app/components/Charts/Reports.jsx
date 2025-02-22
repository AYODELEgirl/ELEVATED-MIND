import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Reports = () => {
  const [state, setState] = useState({
    series: [
      {
        // name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        // name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      colors: ['#043259', '#F5105C'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 5],
        curve: 'smooth',
        dashArray: [0, 0],
      },
      legend: {
        show: false, // Hide the legend
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default Reports;
