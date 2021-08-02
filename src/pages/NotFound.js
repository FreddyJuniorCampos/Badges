import React from 'react'

import pageNotFound from '../images/404.svg'
import './styles/NotFound.css'

function NotFound() {
  return (
    <div className="NotFound">
      <img className="NotFound__img" src={pageNotFound}></img>
    </div>
  );
}

export default NotFound;
