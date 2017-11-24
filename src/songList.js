import React, { Component } from 'react';
import Song from './song';
export default class SongList extends React.Component {

    createList(list) {
        var songList = list.map((song) => {
        return (<li key={song.name}><Song name={song.name} /></li>)
        });
        return songList;
    }

    render() {
        return (
            <div className="list">
                <h4>Tracks</h4>
                <ul>{this.createList(this.props.list)}</ul>
            </div>
        );
    }
};