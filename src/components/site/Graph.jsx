import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart from "chart.js/auto" for the latest version

const Graph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample chart data (replace this with your own data)
    const chartData = {
      labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
      datasets: [
        {
          label: "Clicks",
          data: [65, 59, 80, 81, 56],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Leads",
          data: [5, 39, 70, 50, 90],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Revenue",
          data: [90, 39, 45, 70, 20],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    if (chartRef.current) {
      // Destroy any existing Chart instance before creating a new one
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartRef.current.chartInstance = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 10,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="500"></canvas>
    </div>
  );
};

export default Graph;
