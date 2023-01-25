import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

const data = {
  daily: {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        id: 1,
        label: "daily",
        data: [25, 50, 75, 100, 75, 100, 100],
        borderColor: "#FF81B4",
        backgroundColor: "#FF81B4",
      },
    ],
  },
  monthly: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        id: 2,
        label: "monthly",
        data: [40, 20, 75, 80, 35, 56, 97],
        borderColor: "#FF81B4",
        backgroundColor: "#FF81B4",
      },
    ],
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  clip: false,
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        autoSkip: false,
        beginAtZero: true,
        stepSize: 25,
        // eslint-disable-next-line func-names, object-shorthand
        callback: function (value) {
          return `${value}%`;
        },
      },
    },
  },
};

function Tracking() {
  const [chartData, setData] = useState(data.daily);

  return (
    <>
      <div className="flex justify-center space-x-4">
        <button
          type="button"
          className="rounded-md bg-teal-400 py-2 px-4 text-white"
          onClick={() => {
            setData(data.daily);
          }}
        >
          Daily
        </button>

        <button
          type="button"
          className="rounded-md bg-teal-400 py-2 px-4 text-white"
          onClick={() => {
            setData(data.monthly);
          }}
        >
          Monthly
        </button>
      </div>

      <div className="h-[340px] w-[90%] py-8 sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Line
          className="h-[100%]"
          datasetIdKey="id"
          data={chartData}
          options={options}
        />
      </div>
    </>
  );
}

export default Tracking;
