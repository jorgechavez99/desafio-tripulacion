import React, { useEffect, useState } from 'react'
import Breadcrumb from "../../Breadcrum/Breadcrum"
import SegmentacionBarChart from './SegmentacionBarChart'
import SegmentacionBarChart2 from './SegmentacionBarChart/SegmentacionBarChart2'
import SegmentacionTable from './SegmentacionTable'
import axios from 'axios';
import loadingGif from '/assets/gif-loading.gif';


const SegmentacionContainer = () => {

  const [volumen, setVolumen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [top, setTop] = useState("");
  const corner = "thebridge";
  const endpointVolumen = import.meta.env.VITE_SEGMENTACION_ENDPOINT_REQUEST + corner + "/volumen";
  const endpointDescripcion = import.meta.env.VITE_SEGMENTACION_ENDPOINT_REQUEST + corner + "/descripcion";
  const endpointTop = import.meta.env.VITE_SEGMENTACION_ENDPOINT_REQUEST + corner + "/top";


  // Function to group and sum volume data by period
  const groupAndSumByPeriod = (data) => {
    const periods = [
      { start: "06:00", end: "09:00" },
      { start: "09:00", end: "11:00" },
      { start: "11:00", end: "13:00" },
      { start: "13:00", end: "15:00" },
      { start: "15:00", end: "17:00" },
      { start: "17:00", end: "19:00" },
      { start: "19:00", end: "22:00" }
    ];

    const result = {};

    data.forEach(entry => {
      const { Cluster, franja_horaria, total_compras_codif } = entry;
      const time = franja_horaria.split(" ")[0];

      const periodIndex = periods.findIndex(period => {
        const startTime = period.start.split(":");
        const endTime = period.end.split(":");
        const entryTime = time.split(":");
        const entryHour = parseInt(entryTime[0]);
        const entryMinute = parseInt(entryTime[1]);
        const startHour = parseInt(startTime[0]);
        const startMinute = parseInt(startTime[1]);
        const endHour = parseInt(endTime[0]);
        const endMinute = parseInt(endTime[1]);

        return (
          (entryHour > startHour || (entryHour === startHour && entryMinute >= startMinute)) &&
          (entryHour < endHour || (entryHour === endHour && entryMinute < endMinute))
        );
      });

      if (periodIndex !== -1) {
        const periodKey = `period${periodIndex + 1}`;
        result[Cluster] = result[Cluster] || Array(periods.length).fill(0);
        result[Cluster][periodIndex] += total_compras_codif;
      }
    });

    // Convert periods with sum 0 to "Sin ventas"
    for (const cluster in result) {
      for (let i = 0; i < result[cluster].length; i++) {
        if (result[cluster][i] === 0) {
          result[cluster][i] = "Sin ventas";
        }
      }
    }

    return result;
  };

  // Fetch volumen data from the API
  useEffect(() => {
    const fetchVolumen = async () => {
      try {
        const result = await axios(endpointVolumen, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        });
        const groupedData = groupAndSumByPeriod(result.data);
        setVolumen(groupedData);
      } catch (error) {
        console.error('Error fetching Volumen: ', error);
      }
    };
    fetchVolumen();
  }, []);


  // Fetch descripcion data from the API
  useEffect(() => {
    const fetchDescripcion = async () => {
      try {
        const result = await axios(endpointDescripcion, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        });
        setDescripcion(result.data);

      } catch (error) {
        console.error('Error fetching Descripcion: ', error);
      }
    };
    fetchDescripcion();
  }, []);

  // Fetch top data from the API
  useEffect(() => {
    const fetchTop = async () => {
      try {
        const result = await axios(endpointTop, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        });
        setTop(result.data);

      } catch (error) {
        console.error('Error fetching Volumen: ', error);

      }
    };
    fetchTop();
  }, []);




  return (
    <>
      <Breadcrumb />
      <section className='mainContainer'>
        <h1>Segmentación de clientes</h1>

        {descripcion !== "" && volumen !== "" && top !== "" ? (
          <>
            <article className='chartContainer'>
              <h4>Frecuencia por franja horaria</h4>
              <p>Ventas por tramo horario y grupo</p>
              <SegmentacionBarChart2 volumen={volumen} />
            </article>
            <article>
              <SegmentacionTable descripcion={descripcion} top={top} />
            </article>
          </>

        ) : (
          <article className='spinner'>
            <img src={loadingGif} alt="Cargando datos" />
            <h3>Cargando datos...</h3>
          </article>

        )}
      </section >
    </>
  )
}


export default SegmentacionContainer


