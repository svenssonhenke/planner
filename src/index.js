import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './projectList';
import './styles/css/app.css';
let destination = document.querySelector("#root");


ReactDOM.render(
    <div class="container">
        <ProjectList />
    </div>, destination
);