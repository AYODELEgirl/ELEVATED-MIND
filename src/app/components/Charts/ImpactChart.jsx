import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ImpactChart = () => {
  const [state] = useState({
    series: [33, 23], // ✅ Ongoing = 33, Completed = 23
    options: {
      chart: {
        type: "donut",
        width: "250px", // ✅ Reduce pie width
      },
      colors: ["#F5105C", "#043259"], // ✅ Two colors
      labels: ["Ongoing 23%", "Completed 33%"], // ✅ Labels for tooltips & legend
    //   tooltip: {
    //     enabled: true,
    //     y: {
    //       formatter: (val) => `${val} tasks`, // ✅ Tooltip formatting
    //     },
    //   },
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width="250" // ✅ Adjust width
      />
    </div>
  );
};

export default ImpactChart;
