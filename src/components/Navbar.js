import React from 'react';


function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <a href="#">Hulk</a>
        {/* Active  Selection */}
        <a href="#" className="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </div>
  );
}

export default Navbar;
