import { React, useEffect, useState } from "react";
import { CornerSelected } from "../../../../context/CornerContext";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrum/Breadcrum";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Loading from "../../Loading";

const Cafe = () => {

  const [analiticData, setAnaliticData] = useState({})
  const [loading, setLoading] = useState(true)
  const { corner } = CornerSelected();
  
  useEffect(() => {
    const makeRequest = async () => {
      if(corner == "thebridge") {
        let cornerVar = import.meta.env.VITE_ANALITICAS_GENERAL.replace("%ubicacion%", "the-bridge")
        cornerVar = cornerVar.replace("%maquina%", "cafe")
        const request = await axios.get(cornerVar, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        })

        const days = []
        const daysSemana = [];
        const dataSemana = [];
        const daysPrediccion = [];
        const dataPrediccion = [];

        Object.entries(request.data.semana).forEach(([clave, valor]) => {
          daysSemana.push(clave);
          days.push(clave)
          dataSemana.push(valor);
        });
      
        Object.entries(request.data.prediccion).forEach(([clave, valor]) => {
          daysPrediccion.push(clave);
          days.push(clave)
          dataPrediccion.push(valor);
        });

        const dataSemanaExtended = [...dataSemana, ...new Array(daysPrediccion.length).fill(0),]; 
        
        const dataPrediccionExtended = [...new Array(daysSemana.length).fill(0), ...dataPrediccion,];
        setAnaliticData({ days, dataSemanaExtended, dataPrediccionExtended })
        setLoading(false)
        
      } else {
        let cornerVar = import.meta.env.VITE_ANALITICAS_GENERAL.replace("%ubicacion%", corner)
        cornerVar = cornerVar.replace("%maquina%", "cafe")
        const request = await axios.get(cornerVar, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        })
        
        setAnaliticData(request.data)
      }
      setLoading(false)
    }

    makeRequest()
  }, [])

  return <section className="analiticas-main-container">
    { loading ? <Loading /> : <>
    <article className='breadcrum'>
      <Breadcrumb />
    </article>

    <article className='analiticas-container'>
      <h1>Analítica de ventas</h1>

      <div className='categories'>
        <Link to={ "/ventas/analiticas/cafe" }>Máquina de café</Link>
        <span>|</span>
        <Link to={ "/ventas/analiticas/snacks" }>Máquina de snacks</Link>
        <span>|</span>
        <Link to={ "/ventas/analiticas/vitrina" }>Vitrina inteligente</Link>
      </div>

      <div className="graphic-products-container">
        <div className='graphic'>
          <Bar options={{
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  }
                }
              },
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }} data={{
              labels: analiticData.days,
              datasets: [
                {
                  label: "Ventas totales de los últimos 6 días",
                  data: analiticData.dataSemanaExtended,
                  backgroundColor: "#0090CB",
                },
                {
                  label: 'Pronostico de ventas en los próximos 6 dias',
                  data: analiticData.dataPrediccionExtended,
                  backgroundColor: "#EC8E55",
                },
              ],
            }} />
        </div>

      </div>

    </article>
    </> }
  </section>;
};

export default Cafe;
