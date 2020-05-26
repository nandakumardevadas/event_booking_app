import React from 'react';
import AppLogo from '../core/AppLogo';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li className="direct-menu logo">
            <AppLogo />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;