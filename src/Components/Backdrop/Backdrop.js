import React from 'react';
import './Backdrop.css'

const backdrop = props => (
  // <div className="backdrop"/>
  <div className="backdrop" onClick={props.click} />
);

export default backdrop;