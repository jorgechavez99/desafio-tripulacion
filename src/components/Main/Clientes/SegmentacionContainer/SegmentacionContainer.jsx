import React, { useEffect, useState } from 'react'
import Breadcrumb from "../../Breadcrum/Breadcrum"
import SegmentacionBarChart from './SegmentacionBarChart'
import SegmentacionTable from './SegmentacionTable'
import axios from 'axios';

// Mock data for the chart
const data = [
  {
    name: 'De 9:00 a 12:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}'
    },
    emphasis: {
      focus: 'series'
    },
    data: ["Sin ventas", 3, 8, 4]
  },
  {
    name: 'De 12:00 a 15:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}'
    },
    emphasis: {
      focus: 'series'
    },
    data: [8, "Sin ventas", 6, 2]
  },
  {
    name: 'De 15:00 a 18:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}'
    },
    emphasis: {
      focus: 'series'
    },
    data: [4, 6, 9, 7]
  },
  {
    name: 'De 18:00 a 21:00',
    type: 'bar',
    stack: 'stack',
    label: {
      show: true,
      formatter: '{c}'
    },
    emphasis: {
      focus: 'series'
    },
    data: [6, 8, 3, 5]
  }
];

const SegmentacionContainer = () => {

  const [volumen, setVolumen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [top, setTop] = useState("");
  const corner = "thebridge";
  const endpointVolumen = import.meta.env.VITE_SEGMENTACION_ENDPOINT_REQUEST + corner + "/volumen";
  const endpointDescripcion = import.meta.env.VITE_SEGMENTACION_ENDPOINT_REQUEST + corner + "/descripcion";
  const endpointTop = import.meta.env.VITE_SEGMENTACION_ENDPOINT_REQUEST + corner + "/top";

  useEffect(() => {
    const fetchVolumen = async () => {
      try {
        const result = await axios(endpointVolumen, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        });
        setVolumen(result.data);
        console.log(volumen);
      } catch (error) {
        console.error('Error fetching Volumen: ', error);

      }
    };
    fetchVolumen();
  }, []);

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
              <h4>Horario de compra</h4>
              <p>Gasto por tramo horario y grupo</p>
              <SegmentacionBarChart data={data} />
            </article>
            <article>
              <SegmentacionTable descripcion={descripcion} top={top} />
            </article>
          </>

        ) : (
          // Puedes renderizar un componente o mensaje de relleno aquí
          <p>Cargando...</p>
        )}
    </section >
    </>
  )
}


export default SegmentacionContainer


