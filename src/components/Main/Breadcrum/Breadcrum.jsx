import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {CornerSelected} from '../../../context/CornerContext';

const Breadcrumb = () => {
  const location = useLocation();
  let paths = location.pathname.split('/').filter(path => path !== '');
  paths = paths.map(path => path.charAt(0).toUpperCase() + path.slice(1));
  const {corner} = CornerSelected();
  
  return (
    <section className='breadcrumb'>
      <p><b><Link to="/">{"< "}</Link></b></p>
      <p><Link to="/">{"Corners "}</Link></p>/
      {corner === "thebridge"? <p><Link to="/dashboard">{"The Bridge"}</Link></p>:<p><Link to="/dashboard">{"Schiller"}</Link></p> }
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          /  <p><Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link></p>
        </React.Fragment>
      ))}
    </section>

  );
};

export default Breadcrumb;
