// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template';
import About from './components/about';
import Projects from './components/projects';
import { fetchData, saveData } from './utils/dataRequest';

fetchData('http://localhost:3000/resources/').then(data => {
  console.log(data);
}).catch(data => {
  console.log(data);
});

saveData('http://localhost:3000/resources/', { id: 2, name: 'Bar'}).then(data => {
  console.log(data);
}).catch(data => {
  console.log(data);
});

ReactDOM.render(
  <Template>
    <About aboutData="and I'm from glasgow"/>
    <Projects/>
  </Template>,
  document.getElementById('app')
);
