// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template';
import About from './components/about';
import Projects from './components/projects';

ReactDOM.render(
  <Template>
    <About aboutData="and I'm from glasgow"/>
    <Projects/>
  </Template>,
  document.getElementById('app')
);
