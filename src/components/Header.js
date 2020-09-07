import React from 'react';
import Card from './Card';
import Wallpaper1 from '../img/venom-1.jpg';
import Wallpaper2 from '../img/hulk-1.jpg';
import Wallpaper3 from '../img/venom-2.jpg';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>

        
        <div className="sample-wallpaper">
          
          <Card image={Wallpaper1} />

          
          <Card image={Wallpaper2} />

          
          <Card image={Wallpaper3} />
        </div>
      </div>
    </header>

  );
}

export default Header;
