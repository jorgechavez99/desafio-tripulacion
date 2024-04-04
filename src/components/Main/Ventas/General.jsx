import React, { useEffect, useState } from 'react'
import useBox from '../../../hooks/useBox'
import BarChart from '../BarChart/BarChart'
import liston from '/assets/liston.jpg'
import cafe_umbrellla from '/assets/cafe_umbrella.png'
import mios_maiz from '/assets/mios_maiz.png'
import flecha_arriba from '/assets/flecha_arriba.png'
import flecha_abajo from '/assets/flecha_abajo.png'
import pincho_tortilla from '/assets/pincho_tortilla.png'

import axios from 'axios';
import VentasChart from './VentasChart'
import Breadcrum from "../../Main/Breadcrum/Breadcrum"
import { CornerSelected } from '../../../context/CornerContext'
import NavBar from '../NavBar'

const General = () => {

  const [facturacion, setFacturacion] = useState("");
  const [productos, setProductos] = useState("");
  const [resumen, setResumen] = useState("");


  const { corner: cornerT, setCorner } = CornerSelected();

  let cornerS = "";

  if (cornerT == "thebridge") {
    cornerS = "the-bridge"
  }
  else { cornerS = "schiller" }


  // console.log("ORIGINAL",cornerT)
  // console.log("CAMBIADO",cornerS)

  const corner = cornerS;
  const endpointFacturacion = import.meta.env.VITE_VENTAS_ENDPOINT_REQUEST + "facturacion?ubicacion=" + corner;
  const endpointProductos = import.meta.env.VITE_VENTAS_ENDPOINT_REQUEST + "productosdestacados?ubicacion=" + corner;
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


  useEffect(() => {
    const fetchFacturacion = async () => {
      try {
        const result = await axios(endpointFacturacion, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_DATA_API_KEY
          }
        });
        setFacturacion(result.data);
        // console.log(facturacion);
      } catch (error) {
        console.error('Error fetching facturacion: ', error);

      }
    };
    fetchFacturacion();
  }, []);

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


      } catch (error) {
        console.error('Error fetching productos: ', error);
      }
    };
    fetchProductos();
  }, []);


  //Mock datos para totales 
  // const facturacion = {
  //   "corner": "the_bridge",
  //   "total_diario": [565, 34],
  //   "total_semanal": [1204, 26],
  //   "total_mensual": [2506, 22]
  // }

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
    <>

      <div className='main-container'>

        <section className='main-ventasGeneral-container '>

          {facturacion !== "" && productos !== "" && resumen !== "" ? (
            <> <article className='breadcrum'>
              <Breadcrum />
            </article>

              <h1>
                Overview
              </h1>
              <div>
              </div>
              <p className='title-t'>Resumen beneficios</p>
              <article className='resumen '>
                <div className='item-resumen'>
                  <p className='title'>Total diario</p>
                  <div>
                    <p className='valores'>{facturacion.total_diario[0]}€</p>
                    <p className='porcentaje'>{facturacion.total_diario[1]}%</p>
                  </div>

                </div>
                <div className='item-resumen'>
                  <p className='title'>Total semanal</p>
                  <div>
                    <p className='valores'>{facturacion.total_semanal[0]}€</p>
                    <p className='porcentaje'>{facturacion.total_semanal[1]}%</p>
                  </div>
                </div>
                <div className='item-resumen'>
                  <p className='title'>Total mensual</p>
                  <div>
                    <p className='valores'>{facturacion.total_mensual[0]}€</p>
                    <p className='porcentaje'>{facturacion.total_mensual[1]}%</p>
                  </div>
                </div>
              </article>

              <p className='title-t'>Productos destacados</p>
              <article className='items-productos'>
                <div className='item'>
                  <p className='title-img'>{productos.producto_estrella.producto.replaceAll('-', ' ')}</p>
                  <div className='imagenes'>
                    <div className='product'>
                      <img id="cafe_umbrella" src={cafe_umbrellla} alt="cafe_umbrella" />
                    </div>
                    <p className='letters-u'>{productos.producto_estrella.porcentaje}u</p>
                    <div className='gadgets'>
                      <img id="liston" src={liston} alt="liston" />
                    </div>
                  </div>
                  <p> <b>{productos.producto_estrella.unidades}</b>  Unidades vendidas con respecto a los ultimos 7 dias.</p>
                </div>
                <div className='item'>

                  <p className='title-img'>{productos.producto_mas_vendido.producto.replaceAll('-', ' ')}</p>
                  <div className='imagenes'>
                    <div className='product'>
                      {corner == "the-bridge" ? <img id="cafe_umbrella" src={pincho_tortilla} alt="cafe_umbrella" /> :
                        <img id="cafe_umbrella" src={mios_maiz} alt="cafe_umbrella" />
                      }
                    </div>
                    <p className='letters-p'>{productos.producto_mas_vendido.porcentaje}%</p>
                    <div className='gadgets'>
                      <img id="flecha_arriba" src={flecha_arriba} alt="flecha_arriba" />
                    </div>
                  </div>

                  <p> <b className='number'>{productos.producto_mas_vendido.unidades} </b> Unidades vendidas con respecto a los ultimos 7 dias.</p>

                </div>
                <div className='item'>

                  <p className='title-img'>{productos.producto_menos_vendido.producto.replaceAll('-', ' ')}</p>
                  <div className='imagenes'>
                    <div className='product'>
                      <img id="cafe_umbrella" src={cafe_umbrellla} alt="cafe_umbrella" />
                    </div>
                    <p className='letters-m'>{productos.producto_menos_vendido.porcentaje}%</p>
                    <div className='gadgets'>
                      <img id="flecha_abajo" src={flecha_abajo} alt="flecha_abajo" />
                    </div>
                  </div>

                  <p> <b>{productos.producto_menos_vendido.unidades}</b>  Unidades vendidas con respecto a los ultimos 7 dias.</p>

                </div>

              </article>
              <p className='title-t'>Analiticas de ventas</p>
              <article className='graph-ventas-general'>
                <p >Analiticas de ventas</p>
                <VentasChart resumen={resumen} />
                {/* <BarChart /> */}
              </article>

            </>

          ) : (
            // Puedes renderizar un componente o mensaje de relleno aquí
            <p>Cargando...</p>
          )}



        </section>
      </div>
    </>

  )
}

export default General
