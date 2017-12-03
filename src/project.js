import React, { Component } from 'react';
import { connect } from 'react-redux';
class Project extends Component {

    createList(songList) {
        var songs = songList.map((song) => {
            return (
                <li className="column" key={song.name}>
                    <div className="project-list-project">
                        <h3>{song.name}</h3>
                    </div>
                </li>
            )
        });
        return songs;
    }

    render() {
        return (
            <div className="project">
                <h1>{this.props.match.params.id}</h1>
                <div className="grid-12">
                    <ol className="columns columns-4-desktop columns-2-tablet columns-1-mobile">
                        {this.createList(this.props.project.songList)}
                    </ol>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    project: state.projects.find((p) => p.name === ownProps.match.params.id)
});

export default connect(mapStateToProps)(Project);