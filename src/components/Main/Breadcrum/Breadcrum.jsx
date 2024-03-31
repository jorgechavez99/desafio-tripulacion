import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  let paths = location.pathname.split('/').filter(path => path !== '');
  paths = paths.map(path => path.charAt(0).toUpperCase() + path.slice(1));
  
  return (
    <section className='breadcrumb'>
      <p><b><Link to="/">{"< "}</Link></b></p>
      <p><Link to="/">{" The Bridge "}</Link></p>
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          /  <p><Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link></p>
        </React.Fragment>
      ))}
    </section>

  );
};

export default Breadcrumb;
