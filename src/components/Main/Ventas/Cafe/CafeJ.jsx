import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Breadcrum/Breadcrum'
import { CornerSelected } from '../../../../context/CornerContext'
import axios from 'axios'
import Loading from '../../Loading'
import { Bar } from 'react-chartjs-2'

const CafeJ = () => {

    const [resumen, setResumen] = useState({});

    const [categoriaSelect, setCategoriaSelect] = useState("")

    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState("")

    const { corner: cornerT } = CornerSelected();

    let cornerS = "";

    if (cornerT == "thebridge") {
        cornerS = "the-bridge"
    }
    else { cornerS = "schiller" }


    const corner = cornerS;


    const endpointGraficoVentas = import.meta.env.VITE_ANALITICAS_MAQUINA_ENDPOINT_REQUEST + corner + "&maquina=" + "cafe";

    const endpointGraficoCategorias = import.meta.env.VITE_ANALITICAS_CATEGORIA_ENDPOINT_REQUEST + corner + "&maquina=" + "cafe" + "&categoria=" + categoriaSelect;

    const endpointGraficoProducto = import.meta.env.VITE_ANALITICAS_PRODUCTO_ENDPOINT_REQUEST + corner + "&maquina=" + "cafe" + "&categoria=" + categoriaSelect + "&producto=" + product;

    // console.log(endpointGraficoProducto)


    const endpoint = categoriaSelect === "" ? endpointGraficoVentas : (product === "" ? endpointGraficoCategorias : endpointGraficoProducto)


    console.log("endpoint", endpoint)


    useEffect(() => {


        const fetchResumen = async () => {

            try {
                const result = await axios(endpoint, {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": import.meta.env.VITE_DATA_API_KEY
                    }
                });

                const days = []
                const daysSemana = [];
                const dataSemana = [];
                const daysPrediccion = [];
                const dataPrediccion = [];

                Object.entries(result.data.semana).forEach(([clave, valor]) => {
                daysSemana.push(clave);
                days.push(clave)
                dataSemana.push(valor);
                });
            
                Object.entries(result.data.prediccion).forEach(([clave, valor]) => {
                daysPrediccion.push(clave);
                days.push(clave)
                dataPrediccion.push(valor);
                });

                const dataSemanaExtended = [...dataSemana, ...new Array(daysPrediccion.length).fill(0),]; 
                
                const dataPrediccionExtended = [...new Array(daysSemana.length).fill(0), ...dataPrediccion,];
                setResumen({ days, dataSemanaExtended, dataPrediccionExtended })
                console.log({ days, dataSemanaExtended, dataPrediccionExtended });
                setLoading(false)

            } catch (error) {
                console.error('Error fetching cafe: ', error);
            }
        };
        fetchResumen();

    }, [categoriaSelect, product]);

    const productos = {
      "the-bridge": {
        "cafe": {
            "Café americano": "cafe-americano",
            "Café capuccino": "cafe-capuccino",
            "Café con leche": "cafe-con-leche",
            "Café cortado": "cafe-cortado",
            "Café solo": "cafe-solo",
        },
  
        "descafeinado": {
            "Descafeinado americano": "descafeinado-americano",
            "Descafeinado capuccino": "descafeinado-capuccino",
            "Descafeinado con leche": "descafeinado-con-leche",
            "Descafeinado cortado": "descafeinado-cortado",
            "Descafeinado corto": "descafeinado-corto",
            "Descafeinado macchiato": "descafeinado-macchiato",
        }
      },
      "schiller": {
        "cafe": {
          "Café capuccino": "cafe-capuccino",
          "Café con leche": "cafe-con-leche",
          "Café cortado": "cafe-cortado",
          "Café ristretto": "cafe-ristretto",
          "Café solo": "cafe-solo",
          "Capuccino premium": "capuccino-premium",
          "Flat white": "flat-white",
          "Leche macchiato": "leche-macchiato"
        },

        "especialidades": {
          "Irish": "irish",
          "Irish Schiller": "irish-schiller",
          "Leche": "leche",
          "Leche fría": "leche-fria",
          "Vainilla": "vainilla"
        },

        "mocha": {
          "Chocolate": "chocolate",
          "Chocolate con leche": "chocolate-con-leche",
          "Mocha": "mocha",
          "Mokaccino": "mokaccino"
        },

        "sin_lactosa": {
          "Café con leche sin lactosa": "cafe-con-leche-sin-lactosa",
          "Café cortado sin lactosa": "cafe-cortado-sin-lactosa",
          "Capuccino sin lactosa": "capuccino-sin-lactosa"
        }
      }
    }

    const changeCategory = (e) => {
        const paragraphText = e.target.innerText

        if(paragraphText == "Café") {
            setCategoriaSelect("cafe")
        } else if(paragraphText == "Descafeinado") {
            setCategoriaSelect("descafeinado")
        } else if(paragraphText == "Especialidades") {
          setCategoriaSelect("especialidades")
        } else if(paragraphText == "Mocha") {
        setCategoriaSelect("mocha")
        } else if(paragraphText == "Sin lactosa") {
        setCategoriaSelect("sin_lactosa")
      }

        setProduct("")
    }

    const changeProduct = (e) => {
      const paragraphText = e.target.innerText
      const paragraphValue = productos[corner][categoriaSelect][paragraphText]
      setProduct(paragraphValue)
    }

    return <section className="analiticas-cafe-main-container">
    { loading ? <Loading /> : <>
    <article className='breadcrum'>
      <Breadcrumb />
    </article>

    <article className='analiticas-container'>
      <h1>Máquina Café</h1>

      <div className='categories'>
        { corner == "the-bridge" ? <>
            <p onClick={ changeCategory }>Café</p>
            <span>|</span>
            <p onClick={ changeCategory }>Descafeinado</p>
        </> : <>
            <p onClick={ changeCategory }>Café</p>
            <span>|</span>
            <p onClick={ changeCategory }>Especialidades</p>
            <span>|</span>
            <p onClick={ changeCategory }>Mocha</p>
            <span>|</span>
            <p onClick={ changeCategory }>Sin lactosa</p>
        </> }
      </div>

      <div className='graphic-products-container'>
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
              labels: resumen.days,
              datasets: [
                {
                  label: "Ventas totales de los últimos 6 días",
                  data: resumen.dataSemanaExtended,
                  backgroundColor: "#0090CB",
                },
                {
                  label: 'Pronostico de ventas en los próximos 6 dias',
                  data: resumen.dataPrediccionExtended,
                  backgroundColor: "#EC8E55",
                },
              ],
            }} />
        </div>

        { categoriaSelect == "" ? <></> : <>
            <div className='products-container'>
                <h2>Selecciona uno o varios productos:</h2>

                { Object.keys(productos[corner][categoriaSelect]).map( (value, key) => <p key={ key } onClick={ changeProduct } >{ value }</p> ) }
            </div>
        </> }
      </div>
    </article>
    </> }
  </section>

}

export default CafeJ
