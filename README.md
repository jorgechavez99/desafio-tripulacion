# desafio-tripulacion-umbrella-station

# Umbrella Station: Dashboard de Control para Corners de Vending

## Descripción
 Dashboard que permite visualizar y planificar el control de varios corners de una empresa de vending.

## Tabla de Contenidos
- [Tecnología](#tecnología)
- [Funcionalidad](#funcionalidad)
- [Modelos Predictivos y de Segmentación](#modelos-predictivos-y-de-segmentación)
- [Visualización de Datos](#visualización-de-datos)
- [Autenticación](#autenticación)
- [Sistema de Roles](#sistema-de-roles)
- [Instalación de dependecias](#instalación-de-dependecias)
- [Contacto](#contacto)


## Tecnología
Al elegir React para nuestro proyecto, además de cumplir con una exigencia del proyecto, nos beneficiamos especialmente de su capacidad para crear Single Page Applications (SPA). Esta característica de React no solo nos permite ofrecer una experiencia de usuario más fluida y rápida, eliminando las recargas completas de la página, sino que también facilita el manejo de datos en tiempo real. Al utilizar React, estamos aprovechando su eficiencia y su enfoque moderno para el desarrollo web, lo que resulta en una aplicación más ágil y accesible para los usuarios, mejorando significativamente la interacción y su rapidez.

## Funcionalidad
El dashboard proporciona una visión general del estado y la planificación de varios corners de vending. Permite a los usuarios ver y analizar datos en tiempo real, lo que facilita la toma de decisiones informadas.



## Modelos Predictivos y de Segmentación
El dashboard consume datos de dos modelos implementados en APIs Flask: un modelo predictivo y un modelo de segmentación. Estos modelos diseñados por el equipo de Data Science proporcionan información valiosa para la toma de decisiones.

## Visualización de Datos
Utiliza diferentes modelos de gráficas para una mejor visualización de los datos.

Por ejemplo para visualizar las predicciones de ventas de los productos y asi poder ajustar las estrategias de marketing


```javascript
// Ejemplo de grafic ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const midata = {
    labels: datosDias,
    datasets: [
       
      {
        label: 'Ventas totales de los ultimos 6 días',
        data: semana,
        backgroundColor: ['#0090CB']
    },
    {
      label: 'Pronóstico de ventas en los próximos 6 días',
      data: prediccion,
      backgroundColor:['#EC8E55']
    }

    ]
};
``` 

## Autenticación
Firebase Authentication proporciona una solución segura y conveniente para la gestión de usuarios en aplicaciones, ofreciendo integración con múltiples proveedores de autenticación. Su facilidad de integración a través de SDKs amigables y la consola de administración permite una gestión y personalización eficiente del flujo de autenticación, mejorando la experiencia del usuario al facilitar inicios de sesión rápidos y manejo automático de sesiones. Como parte de la plataforma Firebase, se integra sin problemas con otros servicios de Firebase, asegurando una solución escalable y robusta para desarrolladores que buscan implementar características de autenticación avanzadas con mínimo esfuerzo.

## Sistema de Roles
A pesar de ser una pagina web practicamente de uso personal, se ha introducido un sistema de roles, pensando en esa posible aplicacion en un futuro.

Además hemos creado una capa adicional de seguridad mediante la verificación de emails contra una lista autorizada almacenada en Firestore. Este enfoque garantiza que solo los usuarios con direcciones de correo electrónico preaprobadas y roles asignados puedan acceder a ciertas áreas y funcionalidades de la aplicación, proporcionando un control granular sobre los permisos y el acceso. Al almacenar los roles de usuario y las listas de emails autorizados en Firestore, aprovechamos la capacidad de Firebase para integrar estrechamente la autenticación con la base de datos en tiempo real, facilitando la administración y actualización dinámica de permisos. Esta estrategia refuerza la seguridad y personaliza la experiencia del usuario, asegurando que cada usuario tenga acceso solo a las partes de la aplicación que corresponden a su nivel de autorización, todo mientras se mantiene un alto nivel de protección y conformidad con las mejores prácticas de seguridad.

## Requisitos Previos
Para poder ejecutar y trabajar con este proyecto de manera eficiente, utilizamos las siguientes herramientas:

- **Node.js**: La base de nuestro entorno de desarrollo. Node.js es esencial para ejecutar npm. Puedes descargarlo y obtener instrucciones de instalación en [nodejs.org](https://nodejs.org/).

- **npm** (Node Package Manager): Viene con Node.js, pero es buena idea verificar que tienes la versión 6.x o superior. npm se utiliza para gestionar las dependencias del proyecto. Para verificar tu versión, puedes ejecutar `npm -v` en tu terminal.

- **Babel**: Utilizado para transpilar código ES6+ y JSX a un formato compatible con los navegadores. No necesitas instalar Babel globalmente si ya está configurado en el proyecto, pero es crucial que el proyecto lo incluya como dependencia para la compilación.


## Instalación de dependecias
- axios
- chart.js
- cors
- create-react-component-folder
- dotenv
- echarts
- echarts-for-react
- firebase
- normalize.css
- react
- react-chartjs-2
- react-dom
- react-loader-spinner
- react-router-dom
- sass



## Contacto
Jorge Chavez Mirabal https://github.com/jorgechavez99
Carlos Chinchilla https://github.com/ChinchiGit
Santiago Vedia García  https://github.com/santivediap
Javier Magaña Tello https://github.com/JavierMagana9

