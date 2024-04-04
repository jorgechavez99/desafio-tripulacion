import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Breadcrum/Breadcrum'
import { CornerSelected } from '../../../../context/CornerContext'
import axios from 'axios'
import Loading from '../../Loading'
import { Bar } from 'react-chartjs-2'

const VitrinaS = () => {

    const [activeProduct, setActiveProduct] = useState("")

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


    const endpointGraficoVentas = import.meta.env.VITE_ANALITICAS_MAQUINA_ENDPOINT_REQUEST + corner + "&maquina=" + "vitrina-inteligente";

    const endpointGraficoCategorias = import.meta.env.VITE_ANALITICAS_CATEGORIA_ENDPOINT_REQUEST + corner + "&maquina=" + "vitrina-inteligente" + "&categoria=" + categoriaSelect;

    const endpointGraficoProducto = import.meta.env.VITE_ANALITICAS_PRODUCTO_ENDPOINT_REQUEST + corner + "&maquina=" + "vitrina-inteligente" + "&categoria=" + categoriaSelect + "&producto=" + product;

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
                console.error('Error fetching vitrina-inteligente: ', error);
            }
        };
        fetchResumen();

    }, [categoriaSelect, product]);

    const productos = {
        "the-bridge": {
         
            'bocadillos-y-sandwich-premium': {
              'Bagel salmon aguacate': 'bagel-salmon-aguacate',
              'Bocadillo pollo cesar': 'bocadillo-pollo-cesar',
              'Cool salmon': 'cool-salmon',
              'Ensalada de pasta genovesa': 'ensalada-de-pasta-genovesa',
              'Focaccia mozzarella y pomodoro': 'focaccia-mozzarella-y-pomodoro',
              'Mollete jamon': 'mollete-jamon',
              'Mollete pollo vegetales': 'mollete-pollo-vegetales',
              'Normandia burger': 'normandia-burger',
              'Panini chicken bbq': 'panini-chicken-bbq',
              'Panini jamon queso': 'panini-jamon-queso',
              'Sandwich bacon lechuga tomate': 'sandwich-bacon-lechuga-tomate',
              'Sandwich cheddar cebolla caramelizada': 'sandwich-cheddar-cebolla-caramelizada',
              'Sandwich club pastrami brooklyn': 'sandwich-club-pastrami-brooklyn',
              'Sandwich especial de atun': 'sandwich-especial-de-atun',
              'Tennessee burger': 'tennessee-burger',
              'Wrap de pollo curry': 'wrap-de-pollo-curry'
            },
            'platos-preparados': {
              'Arroz idiazabal con setas': 'arroz-idiazabal-con-setas',
              'Arroz pollo curry': 'arroz-pollo-curry',
              'Chopsuey de verduras': 'chopsuey-de-verduras',
              'Cremas bio vegetales': 'cremas-bio-vegetales',
              'Cremas de verduras legumbre o pollo': 'cremas-de-verduras-legumbre-o-pollo',
              'Ensalada cesar gr': 'ensalada-cesar-gr',
              'Ensalada griega': 'ensalada-griega',
              'Ensalada pollo aguacate': 'ensalada-pollo-aguacate',
              'Lasana pollo corral': 'lasana-pollo-corral',
              'Poke de salmon': 'poke-de-salmon'
            },
            'tentempie': {
              'Bloomer pavo braseado': 'bloomer-pavo-braseado',
              'Pincho de tortilla patatas': 'pincho-de-tortilla-patatas',
              'Rustico bacon': 'rustico-bacon',
              'Rustico bacon o lomo queso': 'rustico-bacon-o-lomo-queso'
            }
        
          },
          "schiller": {
              'bocadillos-y-sandwich-premium': {
                  'Bagel salmon aguacate': 'bagel-salmon-aguacate',
                  'Bloomer jamon york y queso': 'bloomer-jamon-york-y-queso',
                  'Bocadillo pollo cesar': 'bocadillo-pollo-cesar',
                  'Cool salmon': 'cool-salmon',
                  'Durum ternera': 'durum-ternera',
                  'Ensalada cesar': 'ensalada-cesar',
                  'Ensalada de pasta genovesa': 'ensalada-de-pasta-genovesa',
                  'Ensalada poke salmon': 'ensalada-poke-salmon',
                  'Ensalada rulo de cabra bacon y frutos secos': 'ensalada-rulo-de-cabra-bacon-y-frutos-secos',
                  'Focaccia mozzarella y pomodoro': 'focaccia-mozzarella-y-pomodoro',
                  'Mollete jamon': 'mollete-jamon',
                  'Mollete pollo vegetales': 'mollete-pollo-vegetales',
                  'Normandia burger': 'normandia-burger',
                  'Panini chicken bbq': 'panini-chicken-bbq',
                  'Panini jamon queso': 'panini-jamon-queso',
                  'Sandwich bacon lechuga tomate': 'sandwich-bacon-lechuga-tomate',
                  'Sandwich cheddar cebolla caramelizada': 'sandwich-cheddar-cebolla-caramelizada',
                  'Sandwich chicken royal': 'sandwich-chicken-royal',
                  'Sandwich club pastrami brooklyn': 'sandwich-club-pastrami-brooklyn',
                  'Sandwich club sensacional': 'sandwich-club-sensacional',
                  'Sandwich especial de atun': 'sandwich-especial-de-atun',
                  'Sandwich pullet pork': 'sandwich-pullet-pork',
                  'Sandwich vegetal con huevo': 'sandwich-vegetal-con-huevo',
                  'Tennessee burger': 'tennessee-burger',
                  'Wrap de pollo curry': 'wrap-de-pollo-curry',
                  'Wrap pollo tex mex': 'wrap-pollo-tex-mex'
                },
                'gazpachos-y-cremas': {
                  'Gazpacho andaluz': 'gazpacho-andaluz'
                },
            'platos-preparados': {
              'Arroz con rape y gambas': 'arroz-con-rape-y-gambas',
              'Arroz idiazabal con setas': 'arroz-idiazabal-con-setas',
              'Canelones de rabo de toro': 'canelones-de-rabo-de-toro',
              'Chopsuey de verduras': 'chopsuey-de-verduras',
              'Cous cous verduras y ras el hanout': 'cous-cous-verduras-y-ras-el-hanout',
              'Cremas bio vegetales': 'cremas-bio-vegetales',
              'Cremas de verduras legumbre o pollo': 'cremas-de-verduras-legumbre-o-pollo',
              'Ensalada cesar gr': 'ensalada-cesar-gr',
              'Ensalada griega': 'ensalada-griega',
              'Ensalada pollo aguacate': 'ensalada-pollo-aguacate',
              'Ensalada queso cabra': 'ensalada-queso-cabra',
              'Espinacas catalana': 'espinacas-catalana',
              'Finger pollo con mostaza miel': 'finger-pollo-con-mostaza-miel',
              'Lasana pollo corral': 'lasana-pollo-corral',
              'Lentejas con chorizo': 'lentejas-con-chorizo',
              'Penne al pesto': 'penne-al-pesto',
              'Poke de salmon': 'poke-de-salmon',
              'Pollo al curry con arroz basmati': 'pollo-al-curry-con-arroz-basmati',
              'Ravioli de carne al pesto de nueces': 'ravioli-de-carne-al-pesto-de-nueces',
              'Ravioli de carne en salsa boscaiola': 'ravioli-de-carne-en-salsa-boscaiola',
              'Wok quinoa portobelo y quinoa': 'wok-quinoa-portobelo-y-quinoa'
            },
            'postres-y-zumos': {
              'Smoothie fresa manzana': 'smoothie-fresa-manzana',
              'Smoothie naranja mango': 'smoothie-naranja-mango',
              'Yogur cremoso trozos vainilla': 'yogur-cremoso-trozos-vainilla',
              'Yogur desnatado': 'yogur-desnatado',
              'Yogur liquido frambuesa platano miel': 'yogur-liquido-frambuesa-plantano-miel',
              'Zumo naranja': 'zumo-naranja',
              'Zumo premium': 'zumo-premium',
              'Zumos': 'zumos'
            },
            'tentempie': {
              'Bloomer pavo braseado': 'bloomer-pavo-braseado',
              'Bloomer pollo barbacoa': 'bloomer-pollo-barbacoa',
              'Pincho de tortilla patatas': 'pincho-de-tortilla-patatas',
              'Rustico bacon': 'rustico-bacon',
              'Rustico bacon o lomo queso': 'rustico-bacon-o-lomo-queso'
            }
          }
    }

    const changeCategory = (e) => {

        const paragraphText = e.target.innerText

        if(paragraphText == "Bocadillos y Sandwich Premium") {
            setCategoriaSelect("bocadillos-y-sandwich-premium")
        } else if(paragraphText == "Platos preparados") {
            setCategoriaSelect("platos-preparados")
        } else if(paragraphText == "Tentempie") {
          setCategoriaSelect("tentempie")
        } else if(paragraphText == "Gazpachos y cremas") {
        setCategoriaSelect("gazpachos-y-cremas")
        } else if(paragraphText == "Postres y zumos") {
        setCategoriaSelect("postres-y-zumos")
      }

        setProduct("")
        
    }

    const changeProduct = (e) => {
      const paragraphText = e.target.innerText
      const paragraphValue = productos[corner][categoriaSelect][paragraphText]
      setProduct(paragraphValue)
      setActiveProduct(paragraphText)

    }

    return <section className="analiticas-cafe-main-container">
    { loading ? <Loading /> : <>
    <article className='breadcrum'>
      <Breadcrumb />
    </article>

    <article className='analiticas-container'>
      <h1>Máquina Vitrina Inteligente</h1>

      <div className='categories'>
        { corner == "the-bridge" ? <>
            <p onClick={ changeCategory } className={categoriaSelect === "bocadillos-y-sandwich-premium" ? "active" : ""}>Bocadillos y Sandwich Premium</p>
            <span>|</span>
            <p onClick={ changeCategory } className={categoriaSelect === "platos-preparados" ? "active" : ""}>Platos preparados</p>
            <span>|</span>
            <p onClick={ changeCategory } className={categoriaSelect === "tentempie" ? "active" : ""}>Tentempie</p>

        </> : <>
        <p onClick={ changeCategory } className={categoriaSelect === "bocadillos-y-sandwich-premium" ? "active" : ""}>Bocadillos y Sandwich Premium</p>
            <span>|</span>
            <p onClick={ changeCategory } className={categoriaSelect === "platos-preparados" ? "active" : ""}>Platos preparados</p>
            <span>|</span>
            <p onClick={ changeCategory } className={categoriaSelect === "tentempie" ? "active" : ""}>Tentempie</p>
            <span>|</span>
            <p onClick={ changeCategory } className={categoriaSelect === "gazpachos-y-cremas" ? "active" : ""}>Gazpachos y cremas</p>
            <span>|</span>
            <p onClick={ changeCategory } className={categoriaSelect === "postres-y-zumos" ? "active" : ""}>Postres y zumos</p>
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

                { Object.keys(productos[corner][categoriaSelect]).map( (value, key) => <p key={ key } onClick={ changeProduct } className={activeProduct === value ? "active" : ""}>{ value }</p> ) }
            </div>
        </> }
      </div>
    </article>
    </> }
  </section>

}

export default VitrinaS


