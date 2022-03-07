import React from 'react';
import logo  from './logo.svg';

function Header()
{
    return (
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
        My React App
    </a>
  </div>
</nav>
        )
}

export default Header;