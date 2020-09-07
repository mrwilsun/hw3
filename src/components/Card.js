import React from 'react';
// import './App.css';

function Card(props) {
  return (
    <div className="wallpaper">
        <img src={props.image} alt="card pictures"/>
    </div>
  );
}

export default Card;