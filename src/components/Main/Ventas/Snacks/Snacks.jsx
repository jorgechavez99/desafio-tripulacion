import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Breadcrum/Breadcrum'
import { CornerSelected } from '../../../../context/CornerContext'
import axios from 'axios'
import Loading from '../../Loading'
import { Bar } from 'react-chartjs-2'

const Snacks = () => {

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


    const endpointGraficoVentas = import.meta.env.VITE_ANALITICAS_MAQUINA_ENDPOINT_REQUEST + corner + "&maquina=" + "snack";

    const endpointGraficoCategorias = import.meta.env.VITE_ANALITICAS_CATEGORIA_ENDPOINT_REQUEST + corner + "&maquina=" + "snack" + "&categoria=" + categoriaSelect;

    const endpointGraficoProducto = import.meta.env.VITE_ANALITICAS_PRODUCTO_ENDPOINT_REQUEST + corner + "&maquina=" + "snack" + "&categoria=" + categoriaSelect + "&producto=" + product;

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
                console.error('Error fetching snack: ', error);
            }
        };
        fetchResumen();

    }, [categoriaSelect, product]);

    const productos = {

        "the-bridge": {

            'agua': {
                'Agua': 'agua'
            },
            'alimento': {
                'Briote jamon queso': 'briote-jamon-queso',
                'Humus': 'humus'
            },
            'bebida-alcoholica': {
                'Mahou': 'mahou'
            },
            'bebida-carbonatada': {
                'Coca cola original botella': 'coca-cola-original-botella',
                'Coca cola original lata': 'coca-cola-original-lata',
                'Coca cola zero botella': 'coca-cola-zero-botella',
                'Coca cola zero lata': 'coca-cola-zero-lata',
                'Coca cola zero zero botella': 'coca-cola-zero-zero-botella'
            },
            'bebida-energizante': {
                'Monster': 'monster',
                'Monsters sin blanco': 'monsters-sin-blanco',
                'Monster zero': 'monster-zero',
                'Red bull': 'red-bull',
                'Red bull sin azucar': 'red-bull-sin-azucar'
            },
            'bebida-no-carbonatada': {
                'Aloe vera': 'aloe-vera',
                'Aloe vera mango': 'aloe-vera-mango',
                'Aloe vera verde': 'aloe-vera-verde',
                'Aquarius naranja': 'aquarius-naranja',
                'Bifrutas': 'bifrutas',
                'Nestea sin': 'nestea-sin'
            },
            'chocolatina': {
                'Huesitos': 'huesitos',
                'Kinder bueno': 'kinder-bueno',
                'Kinder delice': 'kinder-delice',
                'Kitkat': 'kitkat',
                'Milka tableta': 'milka-tableta',
                'Tokke': 'tokke',
                'Twix': 'twix'
            },
            'galletas': {
                'Chips ahoy': 'chips-ahoy',
                'Choco bom blanco': 'choco-bom-blanco',
                'Choco bom choco leche': 'choco-bom-choco-leche',
                'Elgorriaga': 'elgorriaga',
                'Galletas nocilla': 'galletas-nocilla',
                'Galletas oreo': 'galletas-oreo',
                'Galletas principe': 'galletas-principe',
                'Gullon sin gluten': 'gullon-sin-gluten',
                'Natwins yougur y chocolate': 'natwins-yougur-y-chocolate'
            },
            'lacteos': {
                'Cola cao': 'cola-cao',
                'Milka bebible': 'milka-bebible'
            },
            'snack-dulce': {
                'Barra cereales natura valley': 'barra-cereales-natura-valley',
                'Chicle': 'chicle',
                'Haribo': 'haribo',
                'Pistachos choco': 'pistachos-choco'
            },
            'snack-salado': {
                'Almendra': 'almendra',
                'Mios horneados': 'mios-horneados',
                'Mios maiz': 'mios-maiz',
                'Platanitos goya': 'platanitos-goya',
                'Risketos': 'risketos',
                'Rufles jamon': 'rufles-jamon',
                'Triskys': 'triskys',
                'Yuca goya': 'yuca-goya'
            }

        },
        "schiller": {

            'agua': {
                'Agua coco brik': 'agua-coco-brik',
                'Agua coco lata': 'agua-coco-lata',
                'Agua lanjaron 50cl': 'agua-lanjaron-50cl'
            },
            'alimento': {
                'Briote jamon queso': 'briote-jamon-queso',
                'Briote jamon serrano': 'briote-jamon-serrano',
                'Humus': 'humus'
            },
            'bebida-carbonatada': {
                'Coca cola original botella': 'coca-cola-original-botella',
                'Coca cola original lata': 'coca-cola-original-lata',
                'Coca cola zero botella': 'coca-cola-zero-botella',
                'Coca cola zero lata': 'coca-cola-zero-lata',
                'Coca cola zero zero botella': 'coca-cola-zero-zero-botella'
            },
            'bebida-energizante': {
                'Monster': 'monster',
                'Monsters sin': 'monsters-sin',
                'Monsters sin blanco': 'monsters-sin-blanco',
                'Red bull': 'red-bull',
                'Red bull azul': 'red-bull-azul',
                'Red bull sin azucar': 'red-bull-sin-azucar'
            },
            'bebida-no-carbonatada': {
                'Aloe vera mango': 'aloe-vera-mango',
                'Aloe vera verde': 'aloe-vera-verde',
                'Aquarius': 'aquarius',
                'Aquarius naranja': 'aquarius-naranja',
                'Bifrutas': 'bifrutas',
                'Fanta naranja sin gas': 'fanta-naranja-sin-gas',
                'Limonada gruf': 'limonada-gruf',
                'Nestea': 'nestea'
            },
            'chocolatina': {
                'Huesitos': 'huesitos',
                'Kinder bueno': 'kinder-bueno',
                'Kinder bueno white': 'kinder-bueno-white',
                'Kinder delice': 'kinder-delice',
                'Kitkat': 'kitkat',
                'Milka tableta': 'milka-tableta',
                'Tokke': 'tokke',
                'Twix': 'twix'
            },
            'galletas': {
                'Chips ahoy': 'chips-ahoy',
                'Choco bom blanco': 'choco-bom-blanco',
                'Choco bom chocolate': 'choco-bom-chocolate',
                'Choco bom choco leche': 'choco-bom-choco-leche',
                'Elgorriaga': 'elgorriaga',
                'Galletas nocilla': 'galletas-nocilla',
                'Galletas oreo': 'galletas-oreo',
                'Galletas principe': 'galletas-principe',
                'Gullon sin gluten': 'gullon-sin-gluten',
                'Natwins calabaza y chocolate': 'natwins-calabaza-y-chocolate',
                'Natwins coco yogur': 'natwins-coco-yogur',
                'Natwins yougur y chocolate': 'natwins-yougur-y-chocolate'
            },
            'lacteos': {
                'Cola cao': 'cola-cao',
                'Kaiku sin lactosa': 'kaiku-sin-lactosa',
                'Milka bebible': 'milka-bebible'
            },
            'snack-dulce': {
                'Chicle': 'chicle',
                'Haribo': 'haribo'
            },
            'snack-salado': {
                'Almendra': 'almendra',
                'Borjes natura': 'borjes-natura',
                'Chetos pandilla': 'chetos-pandilla',
                'Doritos': 'doritos',
                'Mios horneados': 'mios-horneados',
                'Mios maiz': 'mios-maiz',
                'Platanitos goya': 'platanitos-goya',
                'Popitas': 'popitas',
                'Risketos': 'risketos',
                'Rufles jamon': 'rufles-jamon',
                'Triskys': 'triskys',
                'Yuca goya': 'yuca-goya'
            }


        }
    }

    const changeCategory = (e) => {
        const paragraphText = e.target.innerText

        if (paragraphText == "Agua") {
            setCategoriaSelect("agua")
        } else if (paragraphText == "Alimento") {
            setCategoriaSelect("alimento")
        } else if (paragraphText == "Bebida Alcoholica") {
            setCategoriaSelect("bebida-alcoholica")
        } else if (paragraphText == "Bebida Carbonatada") {
            setCategoriaSelect("bebida-carbonatada")
        } else if (paragraphText == "Bebida Energizante") {
            setCategoriaSelect("bebida-energizante")
        } else if (paragraphText == "Bebida no Carbonatada") {
            setCategoriaSelect("bebida-no-carbonatada")
        } else if (paragraphText == "Chocolatina") {
            setCategoriaSelect("chocolatina")
        } else if (paragraphText == "Galletas") {
            setCategoriaSelect("galletas")
        } else if (paragraphText == "Lacteos") {
            setCategoriaSelect("lacteos")
        } else if (paragraphText == "Snack Dulce") {
            setCategoriaSelect("snack-dulce")
        } else if (paragraphText == "Snack Salado") {
            setCategoriaSelect("snack-salado")
        }

        setProduct("")
    }

    const changeProduct = (e) => {
        const paragraphText = e.target.innerText
        const paragraphValue = productos[corner][categoriaSelect][paragraphText]
        setProduct(paragraphValue)
    }

    return <section className="analiticas-cafe-main-container">
        {loading ? <Loading /> : <>
            <article className='breadcrum'>
                <Breadcrumb />
            </article>

            <article className='analiticas-container'>
                <h1>Máquina Snacks</h1>

                <div className='categories'>
                    {corner == "the-bridge" ? <>
                        <p onClick={changeCategory}>Agua</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Alimento</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Bebida Alcoholica</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Bebida Carbonatada</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Bebida Energizante</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Bebida no Carbonatada</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Chocolatina</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Galletas</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Lacteos</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Snack Dulce</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Snack Salado</p>
                    </> : <>
                        <p onClick={changeCategory}>Agua</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Alimento</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Bebida Carbonatada</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Bebida Energizante</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Bebida no Carbonatada</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Chocolatina</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Galletas</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Lacteos</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Snack Dulce</p>
                        <span>|</span>
                        <p onClick={changeCategory}>Snack Salado</p>
                    </>}
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

                    {categoriaSelect == "" ? <></> : <>
                        <div className='products-container'>
                            <h2>Selecciona uno o varios productos:</h2>

                            {Object.keys(productos[corner][categoriaSelect]).map((value, key) => <p key={key} onClick={changeProduct} >{value}</p>)}
                        </div>
                    </>}
                </div>
            </article>
        </>}
    </section>

}

export default Snacks


