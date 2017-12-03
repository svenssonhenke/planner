import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {initState} from './redux';
import ProjectList from './projectList';
import Project from './project';
import './styles/css/app.css';


export class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ProjectList} />
                <Route path="/project/:id" component={Project} />
            </Switch>
        );
    }
}

const mapDispatchToProps = {  
    initState
  };

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    projects: state.projects
});


const AppContainer = withRouter( connect(
    mapStateToProps,
    mapDispatchToProps
)(App) );

export default AppContainer;
