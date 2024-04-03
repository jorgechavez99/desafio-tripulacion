import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Breadcrum/Breadcrum'
import { Link } from 'react-router-dom'
import VentasChart from '../VentasChart'
import { CornerSelected } from '../../../../context/CornerContext'
import axios from 'axios'

const Snacks = () => {

    const [resumen, setResumen] = useState("");

    const [categoriaSelect, setCategoriaSelect] = useState("")

    const [product, setProduct] = useState("")

    const { corner: cornerT } = CornerSelected();

    let cornerS = "";

    if (cornerT == "thebridge") {
        cornerS = "the-bridge"
    }
    else { cornerS = "schiller" }


    const corner = cornerS;


    const endpointGraficoVentas = import.meta.env.VITE_ANALITICAS_MAQUINA_ENDPOINT_REQUEST + corner + "&maquina=" + "snack";

    const endpointGraficoCategorias = import.meta.env.VITE_ANALITICAS_CATEGORIA_ENDPOINT_REQUEST + corner + "&maquina=" + "snack" + "&categoria=" + categoriaSelect;

    const endpointGraficoProducto = import.meta.env.VITE_ANALITICAS_PRODUCTO_ENDPOINT_REQUEST + corner + "&maquina=" + "snack" + "&categoria=" + categoriaSelect + "&producto=" + product;

    console.log(endpointGraficoProducto)

    let endpoint = ""

    categoriaSelect ? product ?  endpoint= endpointGraficoProducto  : endpoint= endpointGraficoCategorias  : endpoint=endpointGraficoVentas




    //si no hay categoria select lo 

    useEffect(() => {


        const fetchResumen = async () => {

            try {
                const result = await axios(endpoint, {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": import.meta.env.VITE_DATA_API_KEY
                    }
                });
                setResumen(result.data);
                // console.log(resumen)

            } catch (error) {
                console.error('Error fetching snack: ', error);
            }
        };
        fetchResumen();

    }, [categoriaSelect, product]);

    const handleSubmit = (ev) => {

        ev.preventDefault()



        const newCathegory = ev.target.value

        setCategoriaSelect(newCathegory)

        setProduct("")

    }

    const handleProducto = (ev) => {

        ev.preventDefault()

        const newProduct = ev.target.value

        setProduct(newProduct)

    }


    const categorias = [
        "agua",
        "alimento",
        "bebida-alcoholica",
        "bebida-carbonatada",
        "bebida-no-carbonatada",
        "bebida-energizante",
        "chocolatina",
        "galletas",
        "lacteos",
        "snack-dulce",
        "snack-salado"
    ]


    const productos = {
        "agua": ["agua"],

        "alimento": ["briote-jamon-queso", "humus"],

        "bebida-alcoholica": ["mahou"],

        "bebida-carbonatada": ["coca-cola-original-botella",
            "coca-cola-original-lata",
            "coca-cola-zero-botella",
            "coca-cola-zero-lata",
            "coca-cola-zero-zero-botella"
        ],

        "bebida-no-carbonatada": ["aloe-vera",
            "aloe-vera-mango",
            "aloe-vera-verde",
            "aquarius-naranja",
            "bifrutas",
            "nestea-sin"
        ],

        "bebida-energizante": ["monster",
            "monster-zero",
            "monster-sin-blanco",
            "redbull",
            "redbull-sin-azucar",
        ],

        "chocolatina": ["huesitos",
            "kinder-bueno",
            "kinder-delice",
            "kitkat",
            "milka-tableta",
            "tokke",
            "twix"
        ],

        "galletas": ["chips-ahoy",
            "choco-bom-blanco",
            "choco-bom-choco-leche",
            "elgorriaga",
            "galletas-nocilla",
            "galletas-oreo",
            "galletas-príncipe",
            "gullon-sin-gluten",
            "natwins-yogur-y-chocolate"
        ],

        "lacteos": [
            "cola-cao",
            "milka-bebible"
        ],

        "snack-dulce": [
            "barra-cereales-natura-valley",
            "chicle",
            "haribo",
            "pistachos-choco"
        ],

        "snack-salado": ["almendra",
            "mios-horneados",
            "mios-maíz",
            "platanitos-goya",
            "risketos",
            "ruffles-jamón",
            "triskys",
            "yuca-goya"
        ]
    }

    const productosInt = productos[categoriaSelect];

    return (
        <div>
            <section className='analiticas-main-container'>
                <article className='breadcrum'>
                    <Breadcrumb />
                </article>

                <article className='analiticas-container'>
                    <h1>Maquina de Snacks</h1>
                    {/* <pre>{JSON.stringify(categoriaSelect)}</pre>
                    <pre>{JSON.stringify(product)}</pre> */}
                    <div className='machines-type'>
                        {categorias.map((categoria, index) => {
                            return <button key={index} onClick={handleSubmit} value={categoria}>{categoria}|</button>
                        })}

                    </div>
                    <div className='graph-container'>
                        {resumen !== "" ? (
                            <div className='ventas-graphic'>
                                <VentasChart resumen={resumen} />
                            </div>

                        ) :
                            <p>Cargando...</p>

                        }

                        <article className='products-container'>

                            <p>Selecciona un producto:</p>
                            {categoriaSelect !== "" ? (productosInt.map((item, index) => <button key={index} onClick={handleProducto} value={item}>{item} |</button>)) : <p>Escoja la categoria</p>}
                        </article>
                    </div>

                </article>
            </section>
        </div>
    )
}

export default Snacks
