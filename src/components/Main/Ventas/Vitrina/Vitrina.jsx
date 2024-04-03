import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { useVitrina } from "../../../../hooks/useVitrina";
import Breadcrumb from "../../Breadcrum/Breadcrum";
import { CornerSelected } from "../../../../context/CornerContext";

const Vitrina = () => {
  const { corner: cornerT } = CornerSelected();
  const [categoria, setCategoria] = useState("");

  let cornerS = "";

  if (cornerT == "thebridge") {
    cornerS = "the-bridge";
  } else {
    cornerS = "schiller";
  }

  const corner = cornerS;

  // VITE_ANALITICA_VITRINA =
  //   "https://jfv7cv6wq8.execute-api.eu-north-1.amazonaws.com/v1/ventas/analitica/categoria?ubicacion=the-bridge&maquina=cafe&categoria=descafeinado";

  const { loading, object } = useVitrina(import.meta.env.VITE_ANALITICA_VITRINA);

  // const {  days, vitrinaData, dataSemanaExtended, dataPrediccionExtended } = useVitrina();
  // VITE_ANALITICAS_CATEGORIA_ENDPOINT_REQUEST + corner + "&maquina=" + "cafe" + "&categoria=" + categoriaSelect;
  // console.log(dataPrediccionExtended)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const categorias = [
    "Bocadillos y sándwich premium",
    "Gazpachos y cremas",
    "Platos preparados",
    "Postres y zumos",
    "Tentempié",
  ];

  const handleCategoria = (ev) => {

    const categoriaEscogida = ev.target.value

  };
  return (
    <>
      <Breadcrumb />

      <section className="main-vitrina-container">
        <section>
          <h2>Vitrina Inteligente</h2>

          <ul className="listCategory">
            {categorias.map((categoria) => {
              return <Link onClick={handleCategoria}>{categoria}</Link>;
            })}
          </ul>
        </section>

        {loading ? (
          <>
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
          </>
        ) : object.response ? (
          <>
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
                  labels: object.days,
                  // labels: days,
                  datasets: [
                    {
                      label: "Ventas totales de los últimos 6 dias",
                      data: object.dataSemanaExtended,
                      // data: dataSemanaExtended,
                      backgroundColor: "#0090CB",
                      barThickness: 20,
                    },
                    {
                      label: "Pronostico de ventas en los próximos 6 dias",
                      data: object.dataPrediccionExtended,
                      // data: dataPrediccionExtended,
                      backgroundColor: "#EC8E55",
                      barThickness: 20,
                    },
                  ],
                }}
              />
            </section>

            {/* <section>
                <p>Selecciona un producto:</p>
            </section> */}
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Vitrina;
