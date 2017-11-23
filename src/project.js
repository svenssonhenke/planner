import React, { Component } from 'react';
import SongList from './songList';
export default class Project extends React.Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        return (
            <div className="project">
                <h3>{this.props.name}</h3>
                <SongList list={this.props.songList}/>
            </div>
        );
    }
};