import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#">Projo</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

    </ul>
  </div>
</nav>
 <div className="p-5 text-center bg-light">
 <h1 className="mb-3">Welcome to Projo</h1>
 <h4 className="mb-3">find interesting projects, solve problems, connect with teams</h4>
 <a className="btn btn-primary">
  <Link to="/form" className="nav-link">Get Started</Link>
  </a>
</div>
</header>
  )
}

export default Header