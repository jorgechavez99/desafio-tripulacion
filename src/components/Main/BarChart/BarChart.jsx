import React, { useContext, useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import useFetch from "../../../hooks/useFetch";

const BarChart = () => {

  const { loading, result } = useFetch(import.meta.env.VITE_DASHBOARD_ENDPOINT_REQUEST)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <>
    { loading ? <>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </> : result.objetoData ? <>
    <Bar options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: `${result.objetoData.ubicacion}, ${result.objetoData.maquina}`,
            },
          },
        }} data={{
          labels: result.daysArray,
          datasets: [
            {
              label: result.objetoData.producto,
              data: result.predictionsArray,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }} />
    </> : <></> }
    </>
  );
};

export default BarChart;
