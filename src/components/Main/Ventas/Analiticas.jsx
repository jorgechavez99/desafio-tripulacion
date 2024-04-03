import React, { useEffect, useState } from 'react'
import VentasChart from './VentasChart'
import Breadcrumb from '../Breadcrum/Breadcrum'
import { Link } from 'react-router-dom'
import { CornerSelected } from '../../../context/CornerContext'
import axios from 'axios'

const Analiticas = () => {

  const [resumen, setResumen] = useState("");

  const { corner: cornerT } = CornerSelected();

  let cornerS = "";

  if (cornerT == "thebridge") {
    cornerS = "the-bridge"
  }
  else { cornerS = "schiller" }


  const corner = cornerS;


  const endpointGraficoVentas = import.meta.env.VITE_VENTAS_GRAFICO_ENDPOINT_REQUEST + corner;

  useEffect(() => {
    const fetchResumen = async () => {
      try {
        const result = await axios(endpointGraficoVentas, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        });
        setResumen(result.data);

      } catch (error) {
        console.error('Error fetching resumen: ', error);
      }
    };
    fetchResumen();


  }, []);




  return (
    <section className='analiticas-main-container'>
      <article className='breadcrum'>
        <Breadcrumb />
      </article>

      <article className='analiticas-container'>
        <h1>Analítica de ventas</h1>
        <div className='categories'>
          <Link to={ "/ventas/analiticas/cafe" }>Máquina de café</Link>
          <span>|</span>
          <Link to={"/ventas/analiticas/snacks"}>Máquina de snacks</Link>
          <span>|</span>
          <Link to={"/ventas/analiticas/vitrina"}>Vitrina inteligente</Link>
        </div>


        <div className='graph-container'>
          {resumen !== "" ? (
            <div className='ventas-graphic'>
              <VentasChart resumen={resumen} />
            </div>
          ) :
            <p>Cargando...</p>

          }
        </div>

      </article>
    </section>
  )
}

export default Analiticas
