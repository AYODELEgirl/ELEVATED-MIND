import React from "react";
import ReactApexChart from "react-apexcharts";

const BeforeAndAfterImpactChart = () => {
  const series = [
    {
      name: "Completed", // Dark Blue
      data: [97, 54, 36, 46, 63, 25, 19],
    },
    {
      name: "Ongoing", // Pink
      data: [75, 39, 44, 75, 52, 30, 11],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      stacked: true, // ✅ Stacked bars
      toolbar: { show: false },
    },
    colors: ["#043259", "#F5105C"], // ✅ Dark Blue & Pink
    plotOptions: {
      bar: {
        horizontal: true, // ✅ Horizontal bars
        barHeight: "40%", // ✅ Adjust thickness of bars
      },
    },
    dataLabels: {
      enabled: true, // ✅ Show % values inside bars
      formatter: (val) => `${val}%`, // ✅ Format as percentage
      style: {
        colors: ["#fff"], // ✅ White text inside bars
        fontWeight: "bold",
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    xaxis: {
      categories: [
        "Olayinka Abiola",
        "Olayinka Abiola",
        "Olayinka Abiola",
        "Olayinka Abiola",
        "Olayinka Abiola",
        "Olayinka Abiola",
      ], // ✅ Matches student names in Figma
      labels: {
        formatter: (val) => `${val}%`, // ✅ Format % axis
      },
    },
    legend: {
      position: "top", // ✅ Legend placement
      horizontalAlign: "left",
    },
    grid: {
      show: true,
      strokeDashArray: 4, // ✅ Dotted grid lines like in Figma
    },
  };

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default BeforeAndAfterImpactChart;
