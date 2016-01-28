import React from 'react';
import LinkItem from './linkItem';

const Navigation = ({ items }) => {
  return (
    <ul>
      {items.map(function(item, index){
          let link = '#/' + item;
          // className, key, name, link, ...other
          return <LinkItem className='link-item' key={index} link={link} name={item} />
        })}
    </ul>
  )
}

export default Navigation;
