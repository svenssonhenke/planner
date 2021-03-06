
import React, { Component } from 'react';
import SongList from './songList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddNewProject from './addProject';
import { SetFetchedState } from '../redux';
import api from '../api';

export class ProjectList extends Component {

  constructor(props) {
    super(props);
    api.get().then(result => { this.props.dispatch(SetFetchedState(result))});
  }

    createList(list) {
        var projectList = list.map((project) => {
            return (

                <li className="column" key={project.name}>
                    <Link to={`/project/${project.name}`}>
                        <div className="project-list-project">
                            <h3>{project.name}</h3>
                            <SongList list={project.songList} />
                        </div>

                    </Link>
                </li>

            )
        });
        return projectList;
    }

    render() {
        return (
            <div className="project-list">
            <AddNewProject />
                <div className="grid-12">
                    <ol className="columns columns-4-desktop columns-2-tablet columns-1-mobile">
                        {this.createList(this.props.projects)}
                    </ol>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    projects: state.projects
});

const ProjectListContainer = connect(
    mapStateToProps
)(ProjectList);

export default ProjectListContainer;
