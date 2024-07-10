# desafio-tripulacion-umbrella-station

# ENGLISH

# Umbrella Station: Control Dashboard for Vending Corners

## Description
Dashboard that allows you to visualize and plan the control of various corners of a vending company.

## Table of Contents
- [Technology](#technology)
- [Functionality](#functionality)
- [Predictive and Segmentation Models](#predictive-and-segmentation-models)
- [Data Visualization](#data-visualization)
- [Authentication](#authentication)
- [Role System](#role-system)
- [Dependency Installation](#dependency-installation)
- [Contact](#contact)

## Technology
By choosing React for our project, besides meeting a project requirement, we especially benefit from its ability to create Single Page Applications (SPA). This feature of React not only allows us to offer a smoother and faster user experience by eliminating full page reloads but also facilitates real-time data handling. By using React, we are leveraging its efficiency and modern approach to web development, resulting in a more agile and accessible application for users, significantly improving interaction and speed.

## Functionality
The dashboard provides an overview of the status and planning of various vending corners. It allows users to view and analyze real-time data, facilitating informed decision-making.

## Predictive and Segmentation Models
The dashboard consumes data from two models implemented in Flask APIs: a predictive model and a segmentation model. These models, designed by the Data Science team, provide valuable information for decision-making.

## Data Visualization
Different types of charts are used for better data visualization.

For example, to visualize product sales predictions and adjust marketing strategies accordingly:

```javascript
// ChartJS example
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
            label: 'Total sales in the last 6 days',
            data: semana,
            backgroundColor: ['#0090CB']
        },
        {
            label: 'Sales forecast for the next 6 days',
            data: prediccion,
            backgroundColor: ['#EC8E55']
        }
    ]
};
```
## Authentication
Firebase Authentication provides a secure and convenient solution for user management in applications, offering integration with multiple authentication providers. Its ease of integration through friendly SDKs and the admin console allows efficient management and customization of the authentication flow, improving user experience by facilitating quick logins and automatic session handling. As part of the Firebase platform, it seamlessly integrates with other Firebase services, ensuring a scalable and robust solution for developers looking to implement advanced authentication features with minimal effort.

## Role System
Despite being a practically personal-use web page, a role system has been introduced, thinking of potential future applications.

Additionally, we have created an extra layer of security by verifying emails against an authorized list stored in Firestore. This approach ensures that only users with pre-approved email addresses and assigned roles can access certain areas and functionalities of the application, providing granular control over permissions and access. By storing user roles and authorized email lists in Firestore, we leverage Firebase's capability to closely integrate authentication with the real-time database, facilitating dynamic permission management and updates. This strategy reinforces security and customizes the user experience, ensuring that each user has access only to the parts of the application that correspond to their authorization level, all while maintaining a high level of protection and compliance with best security practices.

## Prerequisites
To efficiently run and work with this project, we use the following tools:

- **Node.js**: The base of our development environment. Node.js is essential for running npm. You can download it and get installation instructions at [nodejs.org](https://nodejs.org/).

- **npm** (Node Package Manager): It comes with Node.js, but it's a good idea to verify that you have version 6.x or higher. npm is used to manage the project's dependencies. To check your version, you can run `npm -v` in your terminal.

- **Babel**: Used to transpile ES6+ and JSX code to a browser-compatible format. You don't need to install Babel globally if it's already configured in the project, but it's crucial that the project includes it as a dependency for compilation.

## Dependency Installation
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

## Contact
- Jorge Chavez Mirabal https://github.com/jorgechavez99
- Carlos Chinchilla https://github.com/ChinchiGit
- Santiago Vedia García  https://github.com/santivediap
- Javier Magaña Tello https://github.com/JavierMagana9


# SPANISH

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
- Jorge Chavez Mirabal https://github.com/jorgechavez99
- Carlos Chinchilla https://github.com/ChinchiGit
- Santiago Vedia García  https://github.com/santivediap
- Javier Magaña Tello https://github.com/JavierMagana9

