import React from 'react';
import Navigation from '../menus/navigation';

const Footer = ({urls, corporateUrls}) => {
  return (
    <footer>
      <Navigation items={urls} />
      <Navigation items={corporateUrls} />
      <p><small>This is from the footer template</small></p></footer>
  )
}

export default Footer
