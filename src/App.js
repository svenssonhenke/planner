import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {initState} from './redux';
import ProjectList from './components/projectList';
import Project from './components/project';
import './styles/css/app.css';


export class App extends React.Component {

  render() {
        return (
          <div>
            <Switch>
                <Route exact path="/" component={ProjectList} />
                <Route path="/project/:id" component={Project} />
            </Switch>
            </div>
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
