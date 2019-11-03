import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { changeTheme } from '../../services/domUtils';

function Header() {
  const isHome = useRouteMatch({ path: '/', exact: true });

  return (
    <header className={`App-header ${isHome ? 'App-header__home' : ''}`}>
      <div className="App-header-title">Sean Corrales</div>
      <div className="App-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <button onClick={changeTheme}>Random Theme</button>
      </div>
    </header>
  );
}

export default Header;
