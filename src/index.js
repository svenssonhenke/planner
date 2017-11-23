import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './projectList';
import './styles/css/amazium.css';
import './styles/css/index.css';
let destination = document.querySelector("#root");


ReactDOM.render(
    <div class="container">
        <ProjectList />
    </div>, destination
);