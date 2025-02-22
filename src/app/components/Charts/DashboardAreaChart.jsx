import React from "react";
import Chart from "react-apexcharts";

const DashboardAreaChart = () => {
    const options = {
        chart: {
          height: 280,
          type: "area",
          toolbar: {
            show: false, 
          },
        },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [1, 2, 3, 4, 5, 6, 7],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
       "May", "June", "July", "Aug", "Sept", "Oct", "Nov", // Month categories
      ],
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "m"; // Append "m" to y-axis labels
        },
      },
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={options.series} type="area" height={280} />
    </div>
  );
};

export default DashboardAreaChart;
