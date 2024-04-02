import React from "react";
import loadingGif from '/assets/gif-loading.gif';

const Loading = () => {
  return (
    <article className='spinner'>
    <img src={loadingGif} alt="Cargando datos" />
    <h3>Cargando datos...</h3>
  </article>
  );
};

export default Loading;
