import React from "react";
import { Link } from "react-router-dom";
// import { MutatingDots } from "react-loader-spinner";

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
import { useVitrina } from "../../../../hooks/useVitrina";
import Breadcrumb from "../../Breadcrum/Breadcrum";

const Vitrina = () => {

  // const { loading, object } = useVitrina(import.meta.env.VITE_ANALITICA_VITRINA);
  const {  days, vitrinaData, dataSemanaExtended, dataPrediccionExtended } = useVitrina();

  console.log(dataPrediccionExtended)
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
      <Breadcrumb />
      <section className="main-vitrina-container">
        <section>
          <h2>Vitrina Inteligente</h2>
          <ul className="listCategory">
            <li>
              <Link>Bocadillos y sándwich premium</Link>
            </li>
            <li>
              <Link>Gazpachos y cremas</Link>
            </li>
            <li>
              <Link>Platos preparados</Link>
            </li>
            <li>
              <Link>Postres y zumos</Link>
            </li>
            <li>
              <Link>Tentempié</Link>
            </li>
          </ul>
        </section>


        {/* { loading ? <>
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
      /> */}
    {/* </> : object.response ? <> */}
        <section className="barchart-container">
          <Bar
            className="barchart"
            options={{
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
              },
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                
              },
            }}
            data={{
              // labels: object.days,
              labels: days,
              datasets: [
                {
                  label: 'Ventas totales de los últimos 6 dias',
                  // data: object.dataSemanaExtended,
                  data: dataSemanaExtended,
                  backgroundColor: "#0090CB",
                  barThickness: 20,
                },
                {
                  label: 'Pronostico de ventas en los próximos 6 dias',
                  // data: object.dataPrediccionExtended,
                  data: dataPrediccionExtended,
                  backgroundColor: "#EC8E55",
                  barThickness: 20,
                }
              ],
            }}
            
          />
        </section>
        {/* </> : <></> } */}

      </section>
    </>
  );
};

export default Vitrina;
