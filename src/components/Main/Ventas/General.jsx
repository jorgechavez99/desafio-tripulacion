import React, { useEffect, useState } from 'react'
import useBox from '../../../hooks/useBox'
import BarChart from '../BarChart/BarChart'
import liston from '../../../../public/assets/liston.jpg'
import cafe_umbrellla from '../../../../public/assets/cafe_umbrella.png'
import mios_maiz from '../../../../public/assets/mios_maiz.png'
import flecha_arriba from '../../../../public/assets/flecha_arriba.png'
import flecha_abajo from '../../../../public/assets/flecha_abajo.png'
import pincho_tortilla from '../../../../public/assets/pincho_tortilla.png'

import axios from 'axios';
import VentasChart from './VentasChart'
import Breadcrum from "../../Main/Breadcrum/Breadcrum"

const General = () => {

  // const [facturacion, setFacturacion] = useState("");
  const [productos, setProductos] = useState("");

  const corner = "the-bridge";
  const endpointFacturacion = import.meta.env.VITE_VENTAS_ENDPOINT_REQUEST + "facturacion?ubicacion=" + corner;
  const endpointProductos = import.meta.env.VITE_VENTAS_ENDPOINT_REQUEST + "productosdestacados?ubicacion=" + corner;
  console.log("verurl", endpointFacturacion)
  // useEffect(() => {
  //   const fetchFacturacion = async () => {
  //     try {
  //       const result = await axios(endpointFacturacion, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-api-key": import.meta.env.VITE_DATA_API_KEY
  //         }
  //       });
  //       setFacturacion(result.data);
  //       console.log(facturacion);
  //     } catch (error) {
  //       console.error('Error fetching facturacion: ', error);

  //     }
  //   };
  //   fetchFacturacion();
  // }, []);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const result = await axios(endpointProductos, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        });
        setProductos(result.data);
        console.log(productos);

      } catch (error) {
        console.error('Error fetching productos: ', error);
      }
    };
    fetchProductos();
  }, []);


  //Mock datos para totales 
  const facturacion = {
    "corner": "the_bridge",
    "total_diario": [565, 34],
    "total_semanal": [1204, 26],
    "total_mensual": [2506, 22]
  }

  //Mock datos para productos
  // const productos = {
  //   "producto_mas_vendido":
  //   {
  //     "producto": "coca_cola_classic",
  //     "porcentaje": 17,
  //     "unidades": 48
  //   },
  //   "producto_menos_vendido":
  //   {
  //     "producto": "galletas_principe",
  //     "porcentaje": 9,
  //     "unidades": 23
  //   },
  //   "producto_estrella":
  //   {
  //     "producto": "coca_cola_zero ",
  //     "porcentaje": 9,
  //     "unidades": 23
  //   },
  // }



  return (
    <section className='main-ventasGeneral-container main-container'>
      {facturacion !== "" && productos !== "" ? (
        <>
   <Breadcrum/>

          <h1>
            Overview
          </h1>
<div>
      </div>
      <p>Resumen beneficios</p>
      <article className='resumen'>
        <div className='item-resumen'>
          <p>Total diario</p>
          <div>
            <p>{facturacion.total_diario[0]}€</p>
            <p>{facturacion.total_diario[1]}%</p>
          </div>

        </div>
        <div className='item-resumen'>
          <p>Total semanal</p>
          <div>
            <p>{facturacion.total_semanal[0]}€</p>
            <p>{facturacion.total_semanal[1]}%</p>
          </div>
        </div>
        <div className='item-resumen'>
          <p>Total mensual</p>
          <div>
            <p>{facturacion.total_mensual[0]}€</p>
            <p>{facturacion.total_mensual[1]}%</p>
          </div>
        </div>
      </article>

      <p>Productos destacados</p>
      <article className='items-productos'>
        <div className='item'>
          <p>{productos.producto_estrella.producto}</p>
          <div className='imagenes'>
            <div className='product'>
              <img id="cafe_umbrella" src={cafe_umbrellla} alt="cafe_umbrella" />
            </div>
            <p>{productos.producto_estrella.unidades}u</p>
            <div className='gadgets'>
              <img id="liston" src={liston} alt="liston" />
            </div>
          </div>
          <p>+{productos.producto_estrella.porcentaje} Unidades vendidas con respecto a los ultimos 7 dias.</p>
        </div>
        <div className='item'>

          <p>{productos.producto_mas_vendido.producto}</p>
          <div className='imagenes'>
            <div className='product'>
              <img id="cafe_umbrella" src={pincho_tortilla} alt="cafe_umbrella" />
            </div>
            <p>{productos.producto_mas_vendido.porcentaje}%</p>
            <div className='gadgets'>
              <img id="flecha_arriba" src={flecha_arriba} alt="flecha_arriba" />
            </div>
          </div>

          <p>+{productos.producto_mas_vendido.unidades} Unidades vendidas con respecto a los ultimos 7 dias.</p>

        </div>
        <div className='item'>

          <p>{productos.producto_menos_vendido.producto}</p>
          <div className='imagenes'>
          <div className='product'>
          <img id="cafe_umbrella" src={cafe_umbrellla} alt="cafe_umbrella" />
          </div>
          <p>{productos.producto_menos_vendido.porcentaje}%</p>
          <div className='gadgets'>
            <img id="flecha_abajo" src={flecha_abajo} alt="flecha_abajo" />
          </div>
          </div>
        
          <p>-{productos.producto_menos_vendido.unidades} Unidades vendidas con respecto a los ultimos 7 dias.</p>

        </div>

      </article>
      <article className='graph-ventas-general'>
        <p>Analiticas de ventas</p>
        <VentasChart/>
        {/* <BarChart /> */}
      </article>

        </>

      ) : (
        // Puedes renderizar un componente o mensaje de relleno aquí
        <p>Cargando...</p>
      )}


      
    </section>
  )
}

export default General
