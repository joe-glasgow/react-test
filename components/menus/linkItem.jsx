import React from 'react';

const LinkItem = ({className, key, name, link}) => {
  return(
    <li className={className} key={key}><a href={link}>{name}</a></li>
  )
}

export default LinkItem;
