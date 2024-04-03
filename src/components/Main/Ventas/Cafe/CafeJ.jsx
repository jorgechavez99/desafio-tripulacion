import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Breadcrum/Breadcrum'
import { Link } from 'react-router-dom'
import VentasChart from '../VentasChart'
import { CornerSelected } from '../../../../context/CornerContext'
import axios from 'axios'

const CafeJ = () => {

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


    const endpointGraficoVentas = import.meta.env.VITE_ANALITICAS_MAQUINA_ENDPOINT_REQUEST + corner + "&maquina=" + "cafe";

    const endpointGraficoCategorias = import.meta.env.VITE_ANALITICAS_CATEGORIA_ENDPOINT_REQUEST + corner + "&maquina=" + "cafe" + "&categoria=" + categoriaSelect;

    const endpointGraficoProducto = import.meta.env.VITE_ANALITICAS_PRODUCTO_ENDPOINT_REQUEST + corner + "&maquina=" + "cafe" + "&categoria=" + categoriaSelect + "&producto=" + product;

    console.log(endpointGraficoProducto)


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
                setResumen(result.data);
                // console.log(resumen)

            } catch (error) {
                console.error('Error fetching cafe: ', error);
            }
        };
        fetchResumen();

    }, [categoriaSelect, product]);

    const handleSubmit = (ev) => {

        ev.preventDefault()



        const newCathegory = ev.target.value

        setCategoriaSelect(newCathegory)

    }

    const handleProducto = (ev) => {

        ev.preventDefault()

        const newProduct = ev.target.value

        setProduct(newProduct)

    }


    const categorias = [
        "cafe",
        "descafeinado",
    ]


    const productos = {
        "cafe": ["cafe-americano",
            "cafe-capuccino",
            "cafe-con-leche",
            "cafe-cortado",
            "cafe-solo",
        ],

        "descafeinado": [
            "descafeinado-americano",
            "descafeinado-capuccino",
            "descafeinado-con-leche",
            "descafeinado-cortado",
            "descafeinado-corto",
            "descafeinado-macchiato",
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
                    <h1>Maquina de Café</h1>
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

export default CafeJ
