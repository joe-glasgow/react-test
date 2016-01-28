// hello-world.jsx
import React from 'react';

const HelloWorld = ({name, className}) => {
  return (<p className={className}>Hello {name}!</p>)
}

export default HelloWorld;
