import React from 'react';
import Navigation from '../menus/navigation';

const Header = ({urls}) => {
  return (
    <header className="header">
      <Navigation items={urls}/>
      <h1>This is a header</h1>
    </header>
  )
}

export default Header
