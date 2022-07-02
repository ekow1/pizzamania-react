import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-default back nav-b">
      <div className="container-fluid">
        <div className="navbar-header head text-light">
          <a className="navbar-brand  text" href="#">
            Pizza <span className="span1">Mania</span>
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right und">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Pizza</a>
          </li>
          <li>
            <a href="#">Pizza Types</a>
          </li>
          <a href="">
            <img className="bag" src="shopping-bag(1).png" alt="" height="44" />
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
